import React from 'react';
import AboutMe from './About';
import Portfolio from './portfolio';
import Footer from './Footer';
import "./styles/Landing.css"
import profimg from "../images/samuel-prof.jpg"

const LandingPage = () => {
    return (
        <div className="landing-page">
            <body>
                <section className="hero">
                    <header className="hero-content">
                        <h1>Welcome to My Portfolio</h1>
                        <img src= {profimg} alt="Profile Photo" class="profile-photo"></img>
                        <p>Unlocking the Code: Exploring the Digital Realm</p>
                    </header>
                </section>
                <contatainer>
                    <section className="portfolio">
                        <Portfolio />
                    </section>

                    <section className="about-me">
                        <AboutMe />
                    </section></contatainer>

            </body>



            <footer className="contact">
                <Footer />
            </footer>
        </div>
    );
};

export default LandingPage;
