import React from 'react';
import resume from '../images/Resume.pdf';
import "./styles/About.css"

const AboutMe = () => {
  const linkedinLink = 'https://www.linkedin.com/in/samuel-rey-carag-946a861a6'
  return (
    <section class='about-container'>
      <h2 class ="about-heading">About Me</h2>
      <p class = "about-paragraph">
        I am a highly motivated and disciplined professional with a background in the United States Marine Corps Reserve as an Aviation Ordnanceman. Currently residing at 11509 Potter St., Norwalk, California 90650, you can reach me at (562)-739-6527 or via email at samuelrey.carag@gmail.com.
      </p>
      <p class = "about-paragraph">
        I am passionate about the aviation industry and am seeking a challenging role where I can leverage my skills and experience. During my time in the Marine Corps Reserve, I honed my ability to manage time efficiently, developed a strong sense of discipline, and excelled in fast-paced environments. I have experience in reading engineering drawings, assembling aircraft weaponry, and troubleshooting and repairing basic circuitry and mechanical components.
      </p>
      <p class = "about-paragraph">
        I am certified for transporting and handling Hazardous Material (ammo-18) and have a background in AutoCAD. Additionally, I hold a Secret Clearance.
      </p>
      <p class = "about-paragraph">
        In my civilian roles, I have worked at Sharetea as a Team Member, where I managed customer orders and upheld product standards. I also have experience as a Host at Gyu-Kaku Japanese Barbeque, where I organized seating arrangements and accommodated customer requests. At Pot of Cha, I served as a Team Member, managing a high volume of customer orders.
      </p>
      <p class = "about-paragraph">
        My educational background includes a high school diploma from Artesia High School, Cerritos, where I graduated with high honors and as a distinguished scholar with a 3.8 GPA. I also attended Cerritos College during high school as part of a special program for teachers. I furthered my education by completing an in-depth full-stack web development course at the University of California Los Angeles, where I gained expertise in HTML, CSS, JavaScript, SQL, MongoDB, and React.
      </p>
      <p class = "about-paragraph">
        I bring a strong technological background, proficiency in electronics mathematics, and expertise in troubleshooting and repairing electrical and electromechanical systems to any team. I am passionate about contributing to the success of an aviation organization and driving operational excellence.
      </p>
      <p class = "about-paragraph">
        If you find me interesting you should check me out at linkedin: <a href={linkedinLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </section>
  );
};

export default AboutMe;
