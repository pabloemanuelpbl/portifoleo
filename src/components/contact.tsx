import { Linkedin, Mail } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  const CardLink: React.FC<
    {
      href: string;
      children: React.ReactNode;
    } & React.HTMLProps<HTMLAnchorElement>
  > = ({ href, children, ...props }) => {
    return (
      <a
        href={href}
        className="p-4 m-2 border rounded-lg shadow-lg flex items-center justify-center"
        {...props}
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
        <CardLink
          href="https://www.linkedin.com/in/pablo-emanuel-3a66a41b0/"
          target="_blank"
        >
          <Linkedin />
        </CardLink>
        <CardLink href="mailto:pablo.fju.pe@gmail.com">
          <Mail />
        </CardLink>
      </div>

      <div className="h-20"></div>
    </>
  );
};

export default Contact;
