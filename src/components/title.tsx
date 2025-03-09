import mfAvatar from "../assets/mf-avatar.svg";

const Title: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mt-10">
        Lorem ipsum, Dolor Sit Amet
      </h1>
      <h3 className="text-xl font-bold text-center mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      </h3>
      <div className="flex justify-center mt-10">
        <img
          src={mfAvatar}
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
