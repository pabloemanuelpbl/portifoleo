import javascriptSVG from "../../assets/technologies/javascript.svg";
import typescriptSVG from "../../assets/technologies/typescript.svg";
import tailwindSVG from "../../assets/technologies/tailwind.svg";
import styledComponentsSVG from "../../assets/technologies/styled-components.svg";
import mongooseSVG from "../../assets/technologies/mongoose.svg";
import knexSVG from "../../assets/technologies/knex.svg";
import nodejsSVG from "../../assets/technologies/nodejs.svg";
import reactSVG from "../../assets/technologies/react.svg";
import nextjsSVG from "../../assets/technologies/nextjs.svg";
import nestjsSVG from "../../assets/technologies/nestjs.svg";
import expressSVG from "../../assets/technologies/express.svg";
import typeormSVG from "../../assets/technologies/typeorm.svg";
import terraformSVG from "../../assets/technologies/terraform.svg";
import dockerSVG from "../../assets/technologies/docker.svg";
import mysqlSVG from "../../assets/technologies/mysql.svg";
import linuxSVG from "../../assets/technologies/linux.svg";

import Timeline from "./timeline";

const technologies: { name: string; image: string }[] = [
  { name: "Javascript", image: javascriptSVG },
  { name: "Typescript", image: typescriptSVG },
  { name: "Taiwlind", image: tailwindSVG },
  { name: "Styled Components", image: styledComponentsSVG },
  { name: "Mongoose", image: mongooseSVG },
  { name: "Knex", image: knexSVG},
  { name: "NodeJS", image: nodejsSVG },
  { name: "React", image: reactSVG },
  { name: "NextJS", image: nextjsSVG },
  { name: "NestJS", image: nestjsSVG },
  { name: "Express", image: expressSVG },
  { name: "TypeORM", image: typeormSVG },
  { name: "Terraform", image: terraformSVG },
  { name: "Docker", image: dockerSVG },
  { name: "Mysql", image: mysqlSVG },
  { name: "Linux", image: linuxSVG },
];

const events = [
  { title: "Senai", description: "Lógica de programacao e LGPD" },
  { title: "DIO", description: "Full Stack Javascript" },
  { title: "Univesp", description: "Superior em Engenharia da Computação" },
  { title: "Compass UOL", description: "Estágio Backend" },
  { title: "Lançamento", description: "Entrega do projeto ao público." },
];

const About: React.FC = () => {
  return (
    <>
      <h2 className="text-center font-bold text-4xl text-emerald-800 m-10">
        SOBRE MIN
      </h2>
      <h3 className="text-center text-5xl font-light mb-4 text-emerald-800">
        Me chamo <strong>Pablo Emanuel</strong>
      </h3>
      <div className="flex justify-center">
        <p className="w-72 text-right font-mono">
          estudo sobre tecnologia á alguns anos e sou apaixonado pelo que faço. 
          <br />
          <br />
          Atualmente tenho conhecimento a respeito de desenvolvimento Front End, Back End e Infra estrutura.
          Ja realizei varios cursos, participei de Bootcamps e também já fiz estagio na área.
          <br />
          <br />
          Estou atualmente cursando Faculdade de Engenharia da cumputação na <strong>Univesp</strong>, e além disso possuo conhecimento de computação em núvem na <strong>AWS</strong>, minha atual certificação é a <strong>Cloud Practitioner</strong>, e estou em busca de outras.
        </p>

        <Timeline events={events} />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center mt-8 w-10/12">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-emerald-200 text-emerald-800 font-semibold py-2 px-4 m-2 rounded-full"
            >
              <img
                src={tech.image}
                alt="logo da tecnologia"
                className="inline-block w-6 h-6 mr-2"
              />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
      <div className="h-40"></div>
    </>
  );
};

export default About;
