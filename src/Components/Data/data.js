import HtmlIcon from "@mui/icons-material/Html";
import MediationIcon from "@mui/icons-material/Mediation";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiPostman,
} from "react-icons/si";
const navigation = [
  { name: "home", href: "#home" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#project" },
  { name: "contact", href: "/" },
];
const skills = [
  {
    name: "C++",
    end: "60",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <TbBrandCpp />,
  },
  {
    name: "DSA",
    end: "60",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <MediationIcon />,
  },
  {
    name: "HTML",
    end: "90",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <HtmlIcon />,
  },
  {
    name: "JS",
    end: "80",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <SiJavascript />,
  },
  {
    name: "CSS",
    end: "90",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <SiCss3 />,
  },
  {
    name: "React",
    end: "85",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <FaReact />,
  },
  {
    name: "TailwindCss",
    end: "85",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <SiTailwindcss />,
  },
  {
    name: "NodeJs",
    end: "70",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <SiNodedotjs />,
  },
  {
    name: "MongoDB",
    end: "70",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <SiMongodb />,
  },
  {
    name: "Python",
    end: "60",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <SiPython />,
  },
  {
    name: "Firebase",
    end: "40",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <SiFirebase />,
  },
  {
    name: "Postman",
    end: "65",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, culpa!",
    icon: <SiPostman />,
  },
];

export { navigation, skills };
