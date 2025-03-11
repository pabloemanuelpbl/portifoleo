import cloneNetflixPng from "../assets/clone-netflix.png";
import loginPagePng from "../assets/login-page.png";
import spaceGamePng from "../assets/space-game.png";
import terraformAWSPng from "../assets/terraformaws.png";
import mysqlPng from "../assets/mysql.png";
import compasscarPng from "../assets/compasscar.png";
import { ProjectsPropsInterface } from "../components/projects";

const myProjects: ProjectsPropsInterface = {
  projects: [
    {
      title: "Clone-Netflix",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec libero.",
      image: cloneNetflixPng,
      github: "https://github.com/pabloemanuelpbl/Clone-Netflix",
      link: "https://pabloemanuelpbl.github.io/Clone-Netflix/",
    },
    {
      title: "login-page",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec libero.".repeat(
          6
        ),
      image: loginPagePng,
      github: "https://github.com/pabloemanuelpbl/login-page",
    },
    {
      title: "jogo_space_shooter",
      description: "Description for project 3",
      image: spaceGamePng,
      github: "https://github.com/pabloemanuelpbl/jogo_space_shooter",
      link: "https://pabloemanuelpbl.github.io/jogo_space_shooter/",
    },
    {
      title: "Compasscar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec libero.",
      image: compasscarPng,
      github: "https://github.com/pabloemanuelpbl/ANOUT24_D01_COMPASSCAR"
    },
    {
      title: "MySQL",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec libero.".repeat(
          6
        ),
      image: mysqlPng,
      github: "https://github.com/pabloemanuelpbl/AWS_NODE_OUT24_SEMANA_01"
    },
    {
      title: "Infraestrutura na AWS com Terraform",
      description: "Description for project 3",
      image: terraformAWSPng,
      github: "https://github.com/pabloemanuelpbl/ANOUT_OUT24_D03_AWS"
    },
  ]
};
export default myProjects.projects;