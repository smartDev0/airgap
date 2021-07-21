import { graphql, useStaticQuery } from 'gatsby';

function useModalButtonContent(id) {
    const data = useStaticQuery(
      graphql`
        query {
            eula: textPage(id: {eq: "eula"}) {
                content {
                  body
                }
            }
        }
    `);

  return data[id]['content']['body'];
}

export default useModalButtonContent;