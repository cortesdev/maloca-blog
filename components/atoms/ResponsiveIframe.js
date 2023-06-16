import React from 'react';

const ResponsiveIframe = ({ src, width, height }) => {
    return (
        <section className=" iframe-container p-10"
        //  style={{ paddingBottom: `${(height / width) * 100}%` }}
        >
            <iframe src={src} height={height} width={width} title="Embedded Website" className="responsive-iframe" allowFullScreen />
        </section>
    );
};

export default ResponsiveIframe;