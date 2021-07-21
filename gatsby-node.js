const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { toKebabCase } = require('./src/util/toKebabCase');

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions;
    const typeDefs = [
        `
            type PeoplesYaml implements Node {
                key: String!
                name: String!
                position: String!
                email: String
                image: File @fileByRelativePath
            }
        `,
        `
            type Mdx implements Node {
                frontmatter: Frontmatter
            }
        `,
        `
            type Frontmatter {
                author: PeoplesYaml @link
                tags: [String!]
            }
        `,
        `
            type EventPost implements Node {
                path: String!
                title: String
                location: String
                type: String
                link: String
                speakers: String
                isBrightTalk: Boolean
                isPodcast: Boolean
                podcastEpisode: Int
                isDownloadble: Boolean
                description: String
                date: Date @dateformat
                image: File @fileByRelativePath
                content: Mdx
            }
        `,
        `
            type Job implements Node {
                path: String
                date: Date @dateformat
                title: String
                description: String
                location: String
                department: String
                content: Mdx
            }
        `,
        `
            type TextPage implements Node {
                slug: String
                title: String
                description: String
                id: String
                content: Mdx
            }
        `,
    ]

    createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve("src/templates/blog-post.jsx");
    const featureTemplate = path.resolve("src/templates/feature.jsx");
    const resourceTemplate = path.resolve("src/templates/resource.jsx");
    const solutionTemplate = path.resolve("src/templates/solution.jsx");
    const eventTemplate = path.resolve("src/templates/event.jsx");
    const jobsTemplate = path.resolve('src/templates/jobs.jsx');
    const textPageTemplate = path.resolve('src/templates/text-page.jsx');

    const result = await graphql(`
        {
            posts: allMdx(
                filter: {fileAbsolutePath: {regex: "/content/blog/"}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 2000
            ) {
                nodes {
                    frontmatter {
                        path
                    }
                }
            }
            features: allMdx(
                filter: {fileAbsolutePath: {regex: "/content/features/"}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 2000
            ) {
                nodes {
                    frontmatter {
                        path
                    }
                }
            }
            resources: allMdx(
                filter: {fileAbsolutePath: {regex: "/content/resources/"}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 2000
            ) {
                nodes {
                    frontmatter {
                        template
                        path
                    }
                }
            }
            solutions: allMdx(
                filter: {fileAbsolutePath: {regex: "/content/solutions/"}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 2000
            ) {
                nodes {
                    frontmatter {
                        path
                    }
                }
            }
            events: allEventPost {
                nodes {
                    path
                }
            }
            jobs: allJob {
                nodes {
                    path
                }
            }
            textPages: allTextPage {
                nodes {
                    slug
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(`Build failed while running GraphQL query.`);
        return;
    }

    const posts = result.data.posts.nodes;

    posts.forEach(node => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {},
        });
    });

    /*
    const features = result.data.features.nodes;

    features.forEach(node => {
        createPage({
            path: node.frontmatter.path,
            component: featureTemplate,
            context: {},
        });
    });
    */

    const resources = result.data.resources.nodes;

    resources.forEach(node => {
        if (node.frontmatter.template != 'nopage') {
            createPage({
                path: node.frontmatter.path,
                component: resourceTemplate,
                context: {},
            });
        }
    });

    /*
    const solutions = result.data.solutions.nodes;

    solutions.forEach(node => {
        createPage({
            path: node.frontmatter.path,
            component: solutionTemplate,
            context: {},
        });
    });
    */

    /*
    const events = result.data.events.nodes;

    events.forEach(node => {
        createPage({
            path: node.path,
            component: eventTemplate,
            content: {},
        })
    });
    */

    const jobs = result.data.jobs.nodes;

    jobs.forEach(node => {
        createPage({
            path: node.path,
            component: jobsTemplate,
            context: {},
        });
    });

    const textPages = result.data.textPages.nodes;

    textPages.forEach(node => {
        createPage({
            path: node.slug,
            component: textPageTemplate,
            context: {
                slug: node.slug,
            },
        });
    });
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
    const { createNodeField, createNode } = actions;

    if (node.internal.type === 'Mdx') {
        const parent = getNode(node.parent);

        if (parent.internal.type === 'File') {
            createNodeField({
                name: 'sourceName',
                node,
                value: parent.sourceInstanceName,
            });
        }

        if (parent.internal.type === 'File' && parent.sourceInstanceName === 'events') {
            const eventsContent = {
                path: node.frontmatter.path,
                title: node.frontmatter.title,
                location: node.frontmatter.location,
                type: node.frontmatter.type,
                link: node.frontmatter.link,
                speakers: node.frontmatter.speakers,
                isBrightTalk: node.frontmatter.isBrightTalk,
                isPodcast: node.frontmatter.isPodcast,
                podcastEpisode: node.frontmatter.podcastEpisode,
                isDownloadble: node.frontmatter.isDownloadble,
                description: node.frontmatter.description,
                date: node.frontmatter.date,
                image: node.frontmatter.image,
                content: node,
            };

            createNode({
                id: createNodeId(`events-${node.id}`),
                parent: node.id,
                children: [],
                internal: {
                    type: 'EventPost',
                    contentDigest: createContentDigest(eventsContent),
                },
                ...eventsContent,
            });
        }

        if (parent.internal.type === 'File' && parent.sourceInstanceName === 'jobs') {
            const jobsContent = {
                path: node.frontmatter.path,
                date: node.frontmatter.date,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                location: node.frontmatter.location,
                department: node.frontmatter.department,
                content: node,
            };

            createNode({
                id: createNodeId(`jobs-${node.id}`),
                parent: node.id,
                children: [],
                internal: {
                    type: 'Job',
                    contentDigest: createContentDigest(jobsContent),
                },
                ...jobsContent,
            });
        }

        if (parent.internal.type === 'File' && parent.sourceInstanceName === 'textPages') {
            const textPageContent ={
                slug: `${createFilePath({ node, getNode })}`,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                id: node.frontmatter.id,
                content: node,
            };

            createNode({
                id: createNodeId(`text-page-${node.id}`),
                parent: node.id,
                children: [],
                internal: {
                    type: 'TextPage',
                    contentDigest: createContentDigest(textPageContent),
                },
                ...textPageContent,
            });
        }
    }
};
