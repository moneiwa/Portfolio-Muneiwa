import React from 'react';
import './index.css';
import './App.css';
import TraineeDetails from './TraineeDetails';
import PersonalIntroduction from './PersonalIntroduction';
import ProjectSection from './ProjectSection';
// import GroupProjectSection from './GroupProjectSection';

function Home() {
  return (
    <div className="home-page">
      <header>
        <nav>
          <div className="logo">
            Port<span>folio</span>
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="text">
          <h1>
            I'm Muneiwa Sithagu<br />
            Aspiring <span>Web Developer</span><br />
            & IT Support Technician
          </h1>
          <p>
            An aspiring web developer, with knowledge of <span>HTML, CSS, JavaScript</span><br />
            ongoing learning of <span>React JS</span>, <span>React Native</span>
          </p>
          <div className="download-cv">
            {/* <a href="cv.pdf" download="Muneiwa_Sithagu_CV.pdf">
              <button>Download CV</button>
            </a> */}
            {/* Commented out due to missing cv.pdf file */}
          </div>
        </div>

        <div className="cercle">
          {/* <img src="newa1.jpg" alt="Profile" /> */}
          {/* Commented out due to missing image file (newa1.jpg) */}
        </div>
      </header>

      <TraineeDetails />
      <PersonalIntroduction />
      <ProjectSection />
      {/* <GroupProjectSection /> */}
    </div>
  );
}

export default Home;
