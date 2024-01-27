import Html5 from "../images/icons/html5.svg";
import Css from "../images/icons/css.svg";
import Js from "../images/icons/js.svg";
import Tailwind from "../images/icons/tailwind.svg";
import Bootstrap from "../images/icons/bootstrap.svg";
import Node from "../images/icons/nodejs.svg";
import ReactJs from "../images/icons/react.svg";
import Mongo from "../images/icons/mongodb.svg";
import Npm from "../images/icons/npm.svg";
import Jquery from "../images/icons/jquery.svg"
import Git from "../images/icons/git.svg";
import GitHub from "../images/icons/github.svg";
import Csharp from "../images/icons/csharp.svg";
import Unity from "../images/icons/unity.svg";
import Ps from "../images/icons/photoshop.svg";
import Il from "../images/icons/illustrator.svg";
import Ae from "../images/icons/aftereffects.svg";
import Pp from "../images/icons/premiere.svg";
import Ableton from "../images/icons/ableton.svg"
import Vs from "../images/icons/vscode.svg"

const skills = [
    { name: "HTML", icon: Html5, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-orange-600/50 duration-100 hover:scale-110", duration: 0.1 },
    { name: "CSS", icon: Css, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-sky-700/50 duration-100 hover:scale-110", duration: 0.12},
    { name: "JS", icon: Js, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-yellow-600/50 duration-100 hover:scale-110", duration: 0.13},
    { name: "JQUERY", icon: Jquery, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-blue-600/50 duration-100 hover:scale-110", duration: 0.14},
    { name: "TAILWIND", icon: Tailwind, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-teal-600/50 duration-100 hover:scale-110", duration: 0.15},
    { name: "BOOTSTRAP", icon: Bootstrap, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-violet-600/50 duration-100 hover:scale-110", duration: 0.16},
    { name: "REACT", icon: ReactJs , class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-cyan-600/50 duration-100 hover:scale-110", duration: 0.17},
    { name: "NODEJS", icon: Node, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-green-600/50 duration-100 hover:scale-110", duration: 0.18},
    { name: "MONGODB", icon: Mongo, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-lime-600/50 duration-100 hover:scale-110", duration: 0.19},
    { name: "NPM", icon: Npm, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-red-600/50 duration-100 hover:scale-110", duration: 0.2},
    { name: "VSCODE", icon: Vs, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-cyan-600/50 duration-100 hover:scale-110", duration: 0.21},
    { name: "GIT", icon: Git, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-red-600/50 duration-100 hover:scale-110", duration: 0.22},
    { name: "GITHUB", icon: GitHub, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-black/50 duration-100 hover:scale-110", duration: 0.23},
    { name: "C#", icon: Csharp, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-purple-600/50 duration-100 hover:scale-110", duration: 0.24},
    { name: "UNITY", icon: Unity, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-slate-600/50 duration-100 hover:scale-110", duration: 0.25},
    { name: "PHOTOSHOP", icon: Ps, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-sky-600/50 duration-100 hover:scale-110", duration: 0.26},
    { name: "ILLUSTRATOR", icon: Il, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-orange-600/50 duration-100 hover:scale-110", duration: 0.27},
    { name: "PREMIERE PRO", icon: Pp, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-fuchsia-600/50 duration-100 hover:scale-110", duration: 0.28},
    { name: "AFTER EFFECTS", icon: Ae, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-indigo-600/50 duration-100 hover:scale-110", duration: 0.29},
    { name: "ABLETON LIVE", icon: Ableton, class: "flex flex-col w-[100px] h-[100px] bg-white rounded-[10px] items-center justify-center shadow-lg shadow-black/50 duration-100 hover:scale-110", duration: 0.3}
]

export default skills;