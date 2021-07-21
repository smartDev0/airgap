import classnames from "classnames"
import React from "react"
import PropTypes from "../util/PropTypes"
import styles from "./BackgroundVideo.module.scss"
import capitalize from '../util/capitalize';
const Box = ({ children, theme, url }) => (
    <div className={classnames([styles.container, {
        [styles[`theme${capitalize(theme)}`]]: theme,
    },])}>
        <div className={classnames([styles.overlay])}>
            <video
                className={classnames([styles.video_play])}
                // height="100%"
                // width="100%"
                loop
                muted
                autoPlay
            >
                <source src={url} type="video/mp4" />
            </video>
        </div>
        <div className={classnames([styles.gradient, styles.overlay])}></div>
        <div className={classnames([styles.gradient, styles.overlay])}></div>
        {children}
    </div>
)

Box.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.string,
    url: PropTypes.string,
}

Box.defaultProps = {
    children: null,
    theme: null,
    url: null,
}

export default Box
