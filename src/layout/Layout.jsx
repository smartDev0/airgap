import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from '../util/PropTypes';
import Footer from './Footer';
import Header from './Header';
import TopBanner from './TopBanner';
import '../fonts/courbd.ttf';

import styles from './Layout.module.scss';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const Layout = ({ location, children }) => (
    <>
        <Helmet>
            <meta name="google-site-verification" content="Ky9yMPJJ2VCUAQ6KYjocpKCfQGY6VIwn9Vk_t4w_tNc" />
        </Helmet>
        <TopBanner />
        <div className={styles.header}>
            <Header />
        </div>
        <main>
            {children}
        </main>
        <Footer />
        <script dangerouslySetInnerHTML={{
            __html: `
            (function () {
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://app.termly.io/embed.min.js';
              s.id = 'c180a60f-2fbf-4b7d-9f2a-6687a686631f';
              s.setAttribute("data-name", "termly-embed-banner");
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            })(); `}}
        />
    </>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
