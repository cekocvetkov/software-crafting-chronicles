import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import * as runtime from "react/jsx-runtime";
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const comps = {
  Image,
  Link,
  IoLogoGithub,
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export const MDXComponent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={{ ...comps, ...components }} />;
};

export default MDXComponent;
