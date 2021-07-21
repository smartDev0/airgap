/* eslint jsx-a11y/control-has-associated-label: 0 */
import { navigate } from 'gatsby';
import classnames from 'classnames';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from '../components/Button';
import Link from '../components/Link';
import Navs from '../components/Navs';
import logo from '../images/logos/default.svg';
import logoWhite from '../images/logos/white.svg';
import useScrollPos from '../hooks/useScrollPos';
import styles from './Header.module.scss';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const navigateTo = (to) => {
        navigate(to);
        setNavOpen(false);
    };

    useScrollPos(offset => {
        setScrolled(offset > 50);
    }, []);

    return (
        <>
            <header
                id="header"
                className={classnames({
                    [styles.header]: true,
                    [styles.headerScrolled]: isScrolled,
                })}
            >
                <Container fluid="xl">
                    <div className={styles.headerRow}>
                        <div className={styles.headerLogo}>
                            <Link to="/" wrapper>
                                <img
                                    className={styles.logo}
                                    src={logoWhite}
                                    alt="logo"
                                />
                                <img
                                    className={classnames([
                                        styles.logo,
                                        styles.logoActive,
                                    ])}
                                    src={logo}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className="d-lg-none">
                            <div
                                tabIndex={0}
                                role="button"
                                className={styles.toggle}
                                onKeyUp={event => event.key === 'Enter' && toggleNav()}
                                onClick={toggleNav}
                            />
                        </div>
                        <div className="d-none d-lg-block">
                            <Navs>
                                <Navs.Link
                                    hasDropdown
                                    title="Solution"
                                >
                                    <Navs.Submenu>
                                        <Navs.Link
                                            to="/zero-trust-isolation-for-network/"
                                        >
                                            Zero Trust Isolation™
                                        </Navs.Link>
                                        {/* <Navs.Link
                                            to="/zero-trust-isolation-for-network/"
                                        >
                                            Zero Trust Isolation for Network
                                        </Navs.Link>
                                        <Navs.Link
                                            to="/zero-trust-isolation-for-endpoint/"
                                        >
                                            Zero Trust Isolation for Endpoint
                                        </Navs.Link> */}
                                        <Navs.Link
                                            to="/ransomware-kill-switch/"
                                        >
                                            Ransomware Kill Switch™
                                        </Navs.Link>
                                    </Navs.Submenu>
                                </Navs.Link>
                                <Navs.Link
                                    to="/#why"
                                >
                                    Why Airgap?
                                </Navs.Link>
                                {/* <Navs.Link
                                    to="/#benefits"
                                >
                                    Benefits
                                </Navs.Link> */}
                                <Navs.Link
                                    hasDropdown
                                    title="Resources"
                                >
                                    <Navs.Submenu>
                                        <Navs.Link
                                            to="/#resources"
                                        >
                                            Resources
                                        </Navs.Link>
                                        <Navs.Link
                                            to="/airgap-ransomware-vulnerability-scanner/"
                                        >
                                            Ransomware Vulnerability Scanner™
                                        </Navs.Link>
                                        <Navs.Link
                                            to="/events/"
                                        >
                                            Events
                                        </Navs.Link>
                                    </Navs.Submenu>
                                </Navs.Link>
                                <Navs.Link
                                    to="/blog/"
                                >
                                    Blog
                                </Navs.Link>
                                <Navs.Link
                                    to="/about/"
                                >
                                    About
                                </Navs.Link>
                                <Navs.Button to="/#contact" variant="pillAccent">
                                    [Learn how it works]
                                </Navs.Button>
                            </Navs>
                        </div>
                    </div>
                </Container>
            </header>
            <div className={classnames(
                styles.overlay,
                {
                    [styles.overlayOpen]: navOpen,
                },
            )}
            >
                <Container fluid="xl" className="h-100">
                    <div className={styles.headerRow}>
                        <div className={styles.headerLogo}>
                            <img
                                className={styles.logo}
                                src={logoWhite}
                                alt="White logo"
                            />
                        </div>
                        <div
                            role="button"
                            className={styles.close}
                            tabIndex={0}
                            onClick={toggleNav}
                            onKeyUp={event => event.key === 'Enter' && toggleNav()}
                        />
                    </div>
                    <div className={styles.overlayContent}>
                        <div>
                            <span
                                role="link"
                                tabIndex={0}
                                className={styles.overlayNav}
                                onClick={() => { navigateTo('/#solution') }}
                                onKeyUp={event => event.key === 'Enter' && navigateTo('/#solution')}
                            >
                                Solution
                            </span>
                            <div className="mt-2">
                                <span
                                    tabIndex={0}
                                    role="link"
                                    className={styles.overlaySubnav}
                                    onClick={() => { navigateTo('/resources/solution-brief/') }}
                                    onKeyUp={event => event.key === 'Enter' && navigateTo('/resources/solution-brief/')}
                                >
                                    Zero Trust Isolation
                                </span>
                            </div>
                            <div className="mt-2">
                                <span
                                    tabIndex={0}
                                    role="link"
                                    className={styles.overlaySubnav}
                                    onClick={() => { navigateTo('/ransomware-kill-switch/') }}
                                    onKeyUp={event => event.key === 'Enter' && navigateTo('/ransomware-kill-switch/')}
                                >
                                    Ransomware Kill Switch
                                </span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <span
                                tabIndex={0}
                                role="link"
                                className={styles.overlayNav}
                                onClick={() => { navigateTo('/#why') }}
                                onKeyUp={event => event.key === 'Enter' && navigateTo('/#why')}
                            >
                                Why Airgap
                            </span>
                        </div>
                        <div className="mt-3">
                            <span
                                tabIndex={0}
                                role="link"
                                className={styles.overlayNav}
                                onClick={() => { navigateTo('/#benefits') }}
                                onKeyUp={event => event.key === 'Enter' && navigateTo('/#benefits')}
                            >
                                Benefits
                            </span>
                        </div>
                        <div className="mt-3">
                            <span
                                tabIndex={0}
                                role="link"
                                className={styles.overlayNav}
                                onClick={() => { navigateTo('/#resources') }}
                                onKeyUp={event => event.key === 'Enter' && navigateTo('/#resources')}
                            >
                                Resources
                            </span>
                            <div className="mt-2">
                                <span
                                    tabIndex={0}
                                    role="link"
                                    className={styles.overlaySubnav}
                                    onClick={() => { navigateTo('/airgap-ransomware-vulnerability-scanner/') }}
                                    onKeyUp={event => event.key === 'Enter' && navigateTo('/airgap-ransomware-vulnerability-scanner/')}
                                >
                                    Ransomware Vulnerability Scanner™
                                </span>
                            </div>
                            <div className="mt-2">
                                <span
                                    tabIndex={0}
                                    role="link"
                                    className={styles.overlaySubnav}
                                    onClick={() => { navigateTo('/events/') }}
                                    onKeyUp={event => event.key === 'Enter' && navigateTo('/events/')}
                                >
                                    Events
                                </span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <span
                                tabIndex={0}
                                role="link"
                                className={styles.overlayNav}
                                onClick={() => { navigateTo('/blog/') }}
                                onKeyUp={event => event.key === 'Enter' && navigateTo('/')}
                            >
                                Blog
                            </span>
                        </div>
                        <div className="mt-3">
                            <span
                                tabIndex={0}
                                role="link"
                                className={styles.overlayNav}
                                onClick={() => { navigateTo('/about/') }}
                                onKeyUp={event => event.key === 'Enter' && navigateTo('/about/')}
                            >
                                About
                            </span>
                        </div>
                        <div className="mt-3">
                            <Button
                              onClick={() => { navigateTo('/#contact') }}
                              onKeyUp={event => event.key === 'Enter' && navigateTo('/#contact')}
                              role="button"
                              tabIndex={0}
                              variant="cta"
                              fullWidth
                            >
                                [Learn how it works]
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Header;
