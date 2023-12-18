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
import home from "../../utils/home.png";
import about from "../../utils/about.png";
import project from "../../utils/project.png";
import blog from "../../utils/blogging.png";
import contact from "../../utils/project.png";

const navigation = [
  { name: "home", href: "/", src: home },
  { name: "skills", href: "/about", src: about },
  { name: "projects", href: "/projects", src: project },
  { name: "blog", href: "/blog", src: blog },
  // { name: "archive", href: "/archive" },
  { name: "contact", href: "/contact", src: contact },
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
