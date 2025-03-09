const technologies: { name: string; image: string }[] = [
  { name: "Javascript", image: "/public/javascript.svg" },
  { name: "Typescript", image: "/public/typescript.svg" },
  { name: "Tailind", image: "/public/tailwind.svg" },
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

const About: React.FC = () => {
  return (
    <>
      <h2 className="text-center font-bold text-4xl text-emerald-800 m-10">
        SOBRE MIN
      </h2>
      <div className="flex justify-center">
        <p className="w-8/12">
          Desde muito cedo meu interesse por computadores vinha a tona, sempre
          busquei conhecimento nesta área com bastante entusiasmo mesmo não
          tendo computador e apenas um celular.
          <br />
          <br />
          De início eu era focado em adquirir conhecimento na área do Hacking
          (que me proporcionou uma base de criptografia, redes,
          vulnerabilidades, protocolos TCP entre outros) e no uso de sistema
          Linux, após alguns anos decidi migrar para a área da programação,
          iniciei com Python mais me desenvolvi de verdade com a linguajem
          Javascript como Full Stack.
          <br />
          <br />
          De repente surgiu uma oportunidade de trabalhar com design gráfico, o
          que me proporcionou experiencia nesta área.
          <br />
          <br />
          Ando constantemente buscando conhecimento com a meta de me aperfeiçoar
          e poder me tornar um bom profissional, Tenho facilidade de aprender e
          tenho alegria ao poder ensinar ou ajudar.
          <br />
          <br />
          Se tiver interesse em me conhecer melhor pode entrar em contato, será
          um prazer conhecê-lo(a).
        </p>
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
                alt="JavaScript Logo"
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
