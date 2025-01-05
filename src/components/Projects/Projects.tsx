/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { AppBar } from '../AppBar';
import { getProjects } from './api/getProjects';
import { LoadingSpinner } from '../LoadingSpinner';

// Define the Project interface (TypeScript type for the project object)
interface Project {
  title: string;
  description: string;
  image: string; // Assuming projects have an image URL
}

const Projects = () => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await getProjects();
        if (resp.data) {
          console.log('Projects data', resp);
          setProjectsData(resp.data);
        }
      } catch (error) {
        console.log('Error fetching projects', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="projects-container mx-5">
      <AppBar title="Projects" description="View all projects here" />
      {loading ? (
        <div className="spinner-container">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                className="project-card-img"
                src={project.image} // Assuming each project has an image
                alt={project.title}
              />
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <button className="project-card-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;

// Styling for the page and cards
const style = `
  .projects-container {
    padding: 20px;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  @media (min-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Individual Project Card Styling */
  .project-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .project-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .project-card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
  }

  .project-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .project-card-description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 16px;
    flex-grow: 1;
  }

  .project-card-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .project-card-button:hover {
    background-color: #0056b3;
  }

  /* Loading Spinner Styles */
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

// Injecting styles into the document head
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = style;
document.head.appendChild(styleSheet);
