import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

import './App.css';
import './index.css'; 

const assessmentData = [
  {
    score: "Advanced",
    title: "HTML & CSS Assessment",
    date: "2024-02-01",
    notes: "Above average"
  },
  {
    score: "intermediate",
    title: "JavaScript Assessment",
    date: "2024-02-05",
    notes: "Excellent understanding of basics"
  },
  {
    score: "intermediate",
    title: "React Native",
    date: "2024-02-10",
    notes: "Completed an external course"
  }
];

const StatCard = ({ value, label }) => (
  <div className="stat-card">
    <h2 className="stat-value">{value}</h2>
    <p className="stat-label">{label}</p>
  </div>
);

function App() {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Form submitted!');
  };
  return (
    <div className="portfolio-container">
   
      <header className="header">
      <span class="logo">
  <span class="port">Port</span><span class="folio">folio</span>
</span>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
           

          
            <li><a href="#goals">Goals</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

     
      <section className="hero-section">
  <div className="hero-content">
    <div className="image-container">
      <img src="ney.jpeg" alt="Main Profile" className="large-image" />
      <img src="newa.jpeg" alt="Overlay Image" className="small-image" />
    </div>
    <div className="hero-text">
      <h1 className="hero-title">Hello, I'm Muneiwa Sithagu</h1>
      <h2 className="hero-subtitle">Aspiring Web Developer & IT Support Technician</h2>
      <p>
        Building modern web applications with   
        <span className="tech"> React</span>, 
        <span className="tech"> JavaScript</span>, 
        and <span className="tech">CSS</span>.
      </p>
      <div className="buttons">
        <a href="Sithagu m CV.pdf" download="Sithagu m CV.pdf" className="btn">Download CV</a>
        <a href="#projects" className="btn">My Projects</a>
      </div>
    </div>
  </div>
</section>
<br></br>
<br></br>
     
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
        I am an aspiring web developer currently working as a Software Developer Trainee at CodeTribe-Mlab Limpopo, where I am honing my skills and expanding my knowledge in the ever-evolving world of web development.
          With a deep passion for problem-solving and a strong curiosity for new technologies, I am driven to create impactful, 
          ,user-centered web applications. I am committed to continuous learning, always eager to explore innovative solutions that make a difference in the digital space.
        </p>

        
          <h3>Connect with Me</h3>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/muneiwa-sithagu-114354226/?originalSubdomain=za" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/moneiwa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a href="mhsithagu@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </li>
        </ul>
      </section>
  
    <h3>Assessments & Skills</h3>
        <div className="stats-container">
          {assessmentData.map((item) => (
            <StatCard 
              key={item.title}  
              value={item.score}
              label={item.title}
            />
          ))}
          <StatCard value="+12" label="Projects Completed" />
        </div>


<section id="skills" className="skills-section">
  <h2>Skills</h2>
  <div className="skills-container">
    <div className="skill-item">
      <img src="react.png" alt="React" className="skill-logo" />
    
    </div>
    <div className="skill-item">
      <img src="node.png" alt="JavaScript" className="skill-logo" />
   
    </div>
    <div className="skill-item">
      <img src="javascript.png" alt="CSS" className="skill-logo" />
  
    </div>
    <div className="skill-item">
      <img src="html.png" alt="HTML" className="skill-logo" />
     
    </div>
    <div className="skill-item">
      <img src="sql.png" alt="SQL" className="skill-logo" />
     
    </div>
    <div className="skill-item">
      <img src="mongo.png" alt="HTML" className="skill-logo" />
     
    </div>

    <div className="skill-item">
      <img src="css.png" alt="CSS" className="skill-logo" />
     
    </div>
  
  </div>
</section>
      


  <h2>Projects</h2>
<section id="projects" className="projects-section">
  {/* Employee App */}
  <div className="project-card">
    <h3>Employee App</h3>
    <p>An app to manage employee records.</p>
    <ul>
      <li>Tech Stack: React, JSON</li>
      <li>Key Features: Employee Management Details</li>
    </ul>
    <img src="employee.PNG" alt="Employee App Screenshot" className="project-screenshot" /><br></br>
    <a href="https://github.com/moneiwa/activity-six.git" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>

  {/* Weather App */}
  <div className="project-card">
    <h3>Weather App</h3>
    <p>A real-time weather forecast application.</p>
    <ul>
      <li>Tech Stack: React, OpenWeather API</li>
      <li>Key Features: Real-Time Weather Data, Location Search</li>
    </ul>
    <img src="weather.PNG" alt="Weather App Screenshot" className="project-screenshot" />
    <br></br>
    <a href="https://github.com/moneiwa/weather.git" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>


  {/* Hotel App */}
  <div className="project-card">
    <h3>Hotel Booking App</h3>
    <p>A platform for booking hotel rooms.</p>
    <ul>
      <li>Tech Stack: React, Firebase</li>
      <li>Key Features: Room Booking, Payment Integration</li>
    </ul>
    <img src="hotel.PNG" alt="Hotel App Screenshot" className="project-screenshot" />
    <br></br>
    <br></br>
    <a href="https://github.com/moneiwa/Hotel-App.git" target="_blank" rel="noopener noreferrer" className="view-project-link">View Project</a>
  </div>

  {/* Recipe App */}
  <div className="project-card">
    <h3>Recipe App</h3>
    <p>A platform to store and view recipes</p>
    <ul>
      <li>Tech Stack: React, CSS</li>
      <li>Key Features: Recipe Management, Ingredient Filtering</li>
    </ul>
    <img src="recipe.PNG" alt="Recipe App Screenshot" className="project-screenshot" /><br></br>
    <a href="https://github.com/moneiwa/online-Recipe-Json.git" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
</section>

{/* Group Projects Section */}
<section id="group-projects" className="group-projects-section">
    
  <div className="project-cardd">
  <h2>Group Projects</h2>
    <h5>FarmGuard App</h5>
    <p>
      Developed during a hackathon (Limpopo Varsity hackathon) as part of the Falcon group. The app monitors farm conditions using IoT.
    </p>
    <ul>
      <li><strong>Team Members:</strong> 10 Members </li>
      <li><strong>Tech Stack:</strong> React</li>
      <li><strong>Key Features:</strong> Real-time monitoring, notifications</li>
      <li><strong>Collaboration Experience:</strong> Used Scrum and GitHub for version control.</li>
    </ul>
  </div>
</section>



      {/* Feedback & Reflections Section */}
      <section id="feedback" className="feedback-section">
        <h2>Feedback & Reflections</h2>
        <p>
       
        </p>
        <p>
          **Self-Reflection:** I’ve grown significantly as a developer, especially in understanding React and backend integration. My key strengths include perseverance and collaboration, but I aim to improve my state management skills and learn advanced backend technologies.
        </p>
      </section>









{/* Goals Section */}
<section id="goals" className="goals-section">
  <h4>Post-Program Goals</h4>
  <div className="goals-container">
    <div className="goals-column">
      <h4>Short-Term Goals:</h4>
      <ul>
        <li>Secure a job in web development.</li>
        <li>Build more portfolio projects.</li>
      </ul>
    </div>
    <div className="goals-column">
      <h4>Long-Term Goals:</h4>
      <ul>
        <li>Become a full-stack developer.</li>
        <li>Contribute to projects.</li>
      </ul>
    </div>
  </div>
</section>




      <section id="contact" className="contact-section">
      
        <div className="form-container">
        <h2>Contact Me</h2>
          <form action="https://formspree.io/f/mnnajaza" method="POST">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            
            <button type="submit">Send</button>
          </form>
        </div>
      </section>





      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Muneiwa Sithagu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
