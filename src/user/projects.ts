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
      title: "Clone Netflix",
      description: 
        "Um projeto simples que recria a interface de um site de vídeos, utilizando HTML e CSS.",
      image: cloneNetflixPng,
      github: "https://github.com/pabloemanuelpbl/Clone-Netflix",
      link: "https://pabloemanuelpbl.github.io/Clone-Netflix/",
    },
    {
      title: "Login Page",
      description:
        "Uma página de login com a possibilidade de alternar entre a área de login, a área de recuperação de senha, de cadastro de usurário e mudança de senha." +
        "Foi usado Typescript, React + Vite e Tailwind. Para adicionar a navegação entre páginas, foi usada a biblioteca react-router-dom." + 
        "Também foi utilizado o pattern de decomposição para que os componentes pudessem ser reutilizados em todas as páginas.",
      image: loginPagePng,
      github: "https://github.com/pabloemanuelpbl/login-page",
    },
    {
      title: "Space Shooter",
      description: 
        "Um jogo simples no front end onde você controla um alienígena no espaço e tenta se proteger dos objetos que passam pela tela.",
      image: spaceGamePng,
      github: "https://github.com/pabloemanuelpbl/jogo_space_shooter",
      link: "https://pabloemanuelpbl.github.io/jogo_space_shooter/",
    },
    {
      title: "Compasscar",
      description:
        "Este é um projeto que construí no estágio que realizei na Compass UOL, ele é uma API de gerenciamento de carros que segue o padrão de arquitetura REST." + 
        " Este projeto foi construído utilizando o framework Nestjs, Knex para trabalhar com banco MySQL, ESLint para padronizar o código e Jest para implementação de testes E2E na aplicação.",
      image: compasscarPng,
      github: "https://github.com/pabloemanuelpbl/ANOUT24_D01_COMPASSCAR"
    },
    {
      title: "MySQL",
      description:
        "Aqui temos uma bateria de arquivos com exemplos de uso de querys SQL.",
      image: mysqlPng,
      github: "https://github.com/pabloemanuelpbl/AWS_NODE_OUT24_SEMANA_01"
    },
    {
      title: "Infraestrutura na AWS com Terraform",
      description: 
        "Este é um projeto que construí no estágio que realizei na Compass UOL, a intenção foi de poder fazer o deploy de uma aplicação construída em grupo, nele contem descrições de como realiza o processo manual, mas também tem os arquivos do Terraform para a automação da criação da infraestrutura.",
      image: terraformAWSPng,
      github: "https://github.com/pabloemanuelpbl/ANOUT_OUT24_D03_AWS"
    },
  ]
};
export default myProjects.projects;