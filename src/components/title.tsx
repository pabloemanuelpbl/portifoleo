import devPicture from "../assets/devpicture.jpeg";

const Title: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mt-10">
        Desenvolvedor Full Stack Javascript
      </h1>
      <div className="flex justify-center">
        <h3 className="text-xl font-serif text-center mt-5 w-10/12">
          Sou um desenvolvedor apaixonado pelo que faço, quer me conhecer? Fique
          à vontade para navegar pelo site.
        </h3>
      </div>
      <div className="flex justify-center mt-10">
        <img
          src={devPicture}
          alt="Round SVG"
          className="w-40 h-40 rounded-full"
        />
      </div>
      <div className="flex justify-center">
        <div className="h-40 w-92 mb-10 border-b-1 border-emerald-300"></div>
      </div>
    </>
  );
};

export default Title;
