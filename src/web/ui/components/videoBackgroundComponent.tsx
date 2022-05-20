import React
 from 'react';
export type VideoBkgComponentProps = {
    isMobile: boolean;
};

export const VideoBkgComponent = ({ isMobile }: VideoBkgComponentProps) => {
    if (isMobile) {
        return (
            <div className="video__element">
                <div className="video__fallback"></div>
            </div>
        );
    } else {
        return (
            <video autoPlay muted loop className="video__element">
                <source src="assets/videos/video_bkg.mp4" type="video/mp4"></source>
                <img src="assets/videos/video_bkg.gif" title="Your browser does not support the <video> tag" />
            </video>
        );
    }
}
