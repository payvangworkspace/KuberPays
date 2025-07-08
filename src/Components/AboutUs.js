import React from 'react';

const AboutUs = () => {
    return (
        <section className="about-me">
            <div id='about-us' className="about-container">
                <div className="about-text">
                    <h4 id='heading-of-about'>Understanding Our Clients</h4>
                    <p className='distance'>
                        We prioritize our clients' needs by providing efficient payment solutions that simplify complex processes.
                        As a market leader in the ever-evolving payment industry, our commitment to innovation and reliability ensures
                        that we stay ahead of the curve. This gives our clients a competitive edge, empowering them to grow and succeed
                        with confidence.
                    </p>

                    <p className='distance'>
                        Our business revolves around long-term, trusted, and mutually beneficial relationships.
                        At KivaPays, we hire the best to deliver the best – a team of passionate specialists within a digital world.
                        We believe that true intelligence finds its form in simplicity, which is why we work with our clients in mapping out secure,
                        effective, and tailored payment solutions that optimize their business growth.
                    </p>

                    <p className='distance'>
                        Supported by secure, state-of-the-art payment systems, we help you and your business get the best from our approach.
                    </p>
                </div>

                <div className="about-image">
                <img src="/about-us.jpg" alt="About Us" />

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
