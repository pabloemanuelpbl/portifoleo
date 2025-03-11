import { Github, Link } from "lucide-react";

export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  github?: string;
  link?: string;
}

export interface ProjectsPropsInterface {
  projects: ProjectInterface[];
}

const Projects: React.FC<ProjectsPropsInterface> = ({ projects }) => {
  return (
    <>
      <h2 className="text-center font-bold text-4xl text-emerald-800 m-10">
        PROJETOS
      </h2>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-11">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl overflow-hidden shadow-lg p-4"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-3xl transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              <div className="h-80 overflow-auto">
                <h3 className="font-medium text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
                <div className="flex gap-3 mt-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="cursor-pointer" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Link className="cursor-pointer" />
                  </a>
                )}
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-40"></div>
    </>
  );
};

export { Projects };
