// import React from 'react';


// function ProjectSection() {
//   const projects = [
//     {
//       title: 'Employee App',
//       description: 'An app to manage employee records and track performance.',
//       techStack: ['React', 'Firebase', 'CSS'],
//       features: ['Add, edit, and delete employee data', 'Track employee performance'],
//       challenges: 'Implementing real-time data updates using Firebase.',
//       solution: 'Used Firebase’s real-time database to handle dynamic updates.',
//       demoLink: 'https://github.com/username/employee-app',
//       screenshot: 'employee-app.jpg',
//     },
//     {
//       title: 'Weather App',
//       description: 'A weather forecast app with real-time data.',
//       techStack: ['React', 'OpenWeather API', 'Bootstrap'],
//       features: ['Current weather updates', 'Search by city'],
//       challenges: 'Integrating the OpenWeather API.',
//       solution: 'Utilized Axios for API calls and error handling.',
//       demoLink: 'https://github.com/username/weather-app',
//       screenshot: 'weather-app.jpg',
//     },
//     {
//       title: 'To-Do List App',
//       description: 'A task management app to organize daily activities.',
//       techStack: ['React', 'CSS'],
//       features: ['Add, edit, and delete tasks', 'Mark tasks as completed'],
//       challenges: 'Creating a user-friendly UI.',
//       solution: 'Implemented a clean and responsive design using CSS.',
//       demoLink: 'https://github.com/username/todolist-app',
//       screenshot: 'todolist-app.jpg',
//     },
//     {
//       title: 'Hotel App',
//       description: 'An app to manage hotel bookings and reservations.',
//       techStack: ['React', 'Node.js', 'MongoDB'],
//       features: ['Book rooms', 'Manage reservations'],
//       challenges: 'Handling concurrent booking requests.',
//       solution: 'Used MongoDB transactions to manage booking conflicts.',
//       demoLink: 'https://github.com/username/hotel-app',
//       screenshot: 'hotel-app.jpg',
//     },
//     {
//       title: 'Recipe App',
//       description: 'An app to store and share recipes.',
//       techStack: ['React', 'Firebase', 'CSS'],
//       features: ['Add, edit, and delete recipes', 'Search for recipes'],
//       challenges: 'Implementing a search functionality.',
//       solution: 'Used Firebase queries to optimize search.',
//       demoLink: 'https://github.com/username/recipe-app',
//       screenshot: 'recipe-app.jpg',
//     },
//   ];

//   return (
//     <div className="project-section">
//       <h2>Projects</h2>
//       {projects.map((project, index) => (
//         <div className="project-card" key={index}>
//           <h3>{project.title}</h3>
//           <p><strong>Description:</strong> {project.description}</p>
//           <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
//           <p><strong>Key Features:</strong></p>
//           <ul>
//             {project.features.map((feature, i) => (
//               <li key={i}>{feature}</li>
//             ))}
//           </ul>
//           <p><strong>Challenges Faced and Solutions:</strong></p>
//           <p>{project.challenges}</p>
//           <p><strong>Solution:</strong> {project.solution}</p>
//           <p><strong>Demo Link:</strong> <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View Project</a></p>
//           <img src={project.screenshot} alt={project.title} className="project-screenshot" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProjectSection;
