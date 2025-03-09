import { Github, Link } from "lucide-react";
import mfavatar from "../assets/mf-avatar.svg";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec libero.",
      image: mfavatar,
    },
    {
      title: "Project 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec libero.".repeat(
          6
        ),
      image: mfavatar,
    },
    {
      title: "Project 3",
      description: "Description for project 3",
      image: mfavatar,
    },
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec libero.",
      image: mfavatar,
    },
    {
      title: "Project 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec libero.".repeat(
          6
        ),
      image: mfavatar,
    },
    {
      title: "Project 3",
      description: "Description for project 3",
      image: mfavatar,
    },
  ];

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
                <Link className="cursor-pointer" />
                <Github className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
