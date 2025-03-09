import javascriptImage from "../assets/javascript.svg";

const technologies: string[] = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "TypeScript",
  "Tailwind CSS",
];

const About: React.FC = () => {
  return (
    <>
      <h2 className="text-center font-bold text-4xl text-emerald-800 m-10">
        SOBRE MIN
      </h2>
      <div className="flex justify-center">
        <p className="text-center w-10/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-emerald-200 text-emerald-800 font-semibold py-2 px-4 m-2 rounded-full"
          >
            <img
              src={javascriptImage}
              alt="JavaScript Logo"
              className="inline-block w-6 h-6 mr-2"
            />
            {tech}
          </span>
        ))}
      </div>
    </>
  );
};

export default About;
