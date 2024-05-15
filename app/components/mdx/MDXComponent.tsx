import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import * as runtime from "react/jsx-runtime";
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Link,
  IoLogoGithub,
};

interface MdxProps {
  code: string;
}

function MDXComponent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components}></Component>;
}

export default MDXComponent;
