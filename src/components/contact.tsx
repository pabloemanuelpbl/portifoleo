import { Linkedin, Mail } from "lucide-react";

const Contact: React.FC = () => {
  const CardLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => {
    return (
      <a
        href={href}
        className="p-4 m-2 border rounded-lg shadow-lg flex items-center justify-center"
      >
        {children}
      </a>
    );
  };

  return (
    <>
      <h2 className="text-center font-bold text-4xl text-emerald-800 m-10">
        CONTATO
      </h2>

      <div className="flex justify-center">
        <CardLink href="">
          <Linkedin />
        </CardLink>
        <CardLink href="">
          <Mail />
        </CardLink>
      </div>

      <div className="h-20"></div>
    </>
  );
};

export default Contact;
