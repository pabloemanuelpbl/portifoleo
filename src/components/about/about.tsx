import Timeline from "./timeline";

const technologies: { name: string; image: string }[] = [
  { name: "Javascript", image: "/public/javascript.svg" },
  { name: "Typescript", image: "/public/typescript.svg" },
  { name: "Taiwlind", image: "/public/tailwind.svg" },
  { name: "Styled Components", image: "/public/styled-components.svg" },
  { name: "Mongoose", image: "/public/mongoose.svg" },
  { name: "Knex", image: "/public/knex.svg" },
  { name: "NodeJS", image: "/public/nodejs.svg" },
  { name: "React", image: "/public/react.svg" },
  { name: "NextJS", image: "/public/nextjs.svg" },
  { name: "NestJS", image: "/public/nestjs.svg" },
  { name: "Express", image: "/public/express.svg" },
  { name: "TypeORM", image: "/public/typeorm.svg" },
  { name: "Terraform", image: "/public/terraform.svg" },
  { name: "Docker", image: "/public/docker.svg" },
  { name: "Mysql", image: "/public/mysql.svg" },
  { name: "Linux", image: "/public/linux.svg" },
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
