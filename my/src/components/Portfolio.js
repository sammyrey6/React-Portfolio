import React from 'react';

const Portfolio = () => {
  const githubLink = 'https://github.com/sammyrey6';
  const linkedinLink = 'https://www.linkedin.com/in/samuel-rey-carag-946a861a6';

  return (
    <section className="portfolio">
      <h2>Samuel Rey Carag</h2>
      <p>Email: samuelrey.carag@gmail.com</p>
      <p>GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">github.com/sammyrey6</a></p>
      <p>LinkedIn: <a href={linkedinLink} target="_blank" rel="noopener noreferrer">linkedin.com/in/samuel-rey-carag</a></p>
    </section>
  );
};

export default Portfolio;
