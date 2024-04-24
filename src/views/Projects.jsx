import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Define an array of project objects with title, image, description, and GitHub link
  const [projects, setProjects] = useState([
    {
      title: "Project 1",
      image: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      image: "https://media.istockphoto.com/id/1254568477/photo/indian-rupee-money-bag-and-red-arrow-up-influx-of-investment-and-capital-increase-of-wealth.jpg?s=1024x1024&w=is&k=20&c=U8EgyecAkUnXKS_o1miIA1Er03rGmd_QWIs8dPRtD7Q=",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3",
      image: "https://media.istockphoto.com/id/1097545284/photo/diplocarpon-rosae-rose-black-spot-disease.jpg?s=1024x1024&w=is&k=20&c=evGDcJzKjKL50FXwo3y4qjUpzJvjBqGPFrAl7aJ-JJo=",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      githubLink: "https://github.com/yourusername/project3",
    },
    {
      title: "Project 4",
      image: "https://media.istockphoto.com/id/1413407097/photo/car-insurance.jpg?s=1024x1024&w=is&k=20&c=V_UCk54oU2LJDDnUoQAdZbgKOMnLuMx7eBc1_b1ytaU=",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      githubLink: "https://github.com/yourusername/project4",
    },
  ]);

  // State to track whether to show more projects or not
  const [showMore, setShowMore] = useState(false);

  // Function to handle click on "Show More" button
  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Render Card components for each project */}
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        {!showMore && (
          <button
            onClick={handleShowMore}
            className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
          >
            Show More
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        )}
        {showMore && (
          <a
            href="https://github.com/yourusername"
            className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
          >
            View More on GitHub
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
