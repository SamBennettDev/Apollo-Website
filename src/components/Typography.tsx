import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
}

export const H1 = ({ children }: TypographyProps) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl tracking-wide">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: TypographyProps) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const H3 = ({ children }: TypographyProps) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const H4 = ({ children }: TypographyProps) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};

export const P = ({ children }: TypographyProps) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export const Blockquote = ({ children }: TypographyProps) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

export const Ul = ({ children }: TypographyProps) => {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
};

export const Code = ({ children }: TypographyProps) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};
