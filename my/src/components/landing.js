import React from 'react';
import AboutMe from './About';
import Portfolio from './portfolio';
import Contact from './Contact';


const LandingPage = () => {
    return (
        <div className="landing-page">


            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Your Journey Begins Here</p>
                </div>
            </section>

            <section className="about-me">
                <AboutMe />
            </section>

            <section className="portfolio">
                <Portfolio />
            </section>

            <section className="contact">
                <Contact />
            </section>
        </div>
    );
};

export default LandingPage;
