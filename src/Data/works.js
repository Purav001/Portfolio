import indovina from "../images/works/indovina.gif"
import gameLab from "../images/works/gameLab.gif"
// import mudima from "../images/works/mudima.gif"
import g1 from "../images/works/game1.jpg"
import g2 from "../images/works/game2.jpg"
import g3 from "../images/works/game3.jpg"

import tea from "../images/works/tea.png"
import ecommerce from "../images/works/Ecommerce prototype1.png"

import blackhorse from "../images/works/BlackHorse.jpg"
import caffedellearti from "../images/works/CaffeDelleArti.png"
import lehibou from "../images/works/LeHibou.jpg"
import magnus from "../images/works/Magnus.png"
import bats from "../images/works/Bats.png"
import friday from "../images/works/Friday.png"
import marvanza from "../images/works/Marvanza.png"

import choice from "../images/works/Choiches.jpg"
import leaf from "../images/works/Leaf.jpg"
import hands from "../images/works/Handshake.jpg"
import manMiddle from "../images/works/ManMiddle.jpg"
import manNowhere from "../images/works/ManNowhere.jpg"
import touch from "../images/works/Touch.jpg"




const web = [
    // {category: "games", image: mudima, description:"Interactive game for museum visitors made for Museo diocesano di Altamura", stack: ["Unity", "C#"]},
    {title:"Company website", image: tea, description:"Site created for the company Tea s.r.l.", stack: "Wordpress, Elementor"},
    {title:"E-commerce (Demo)",image: ecommerce, description:"An e-commerce prototype site", stack: "React.js, TailwindCSS"},
    {title:"Company website", image: ecommerce, description:"An e-commerce prototype site", stack: "React.js, TailwindCSS"},
]

const multimedia = [
    // {category: "games", image: mudima, description:"Interactive game for museum visitors made for Museo diocesano di Altamura", stack: ["Unity", "C#"]},
    {title:"Game Lab", image: gameLab, description:"Interactive game for museum visitors made for Museo diocesano di Santa Severina", stack: "Unity, C#"},
    {title:"Indovina il santo!", image: indovina, description:"Interactive game for museum visitors made for Museo diocesano di Lamezia Terme", stack: "Unity, C#"},
]

const itchGames = [
    // {category: "games", image: mudima, description:"Interactive game for museum visitors made for Museo diocesano di Altamura", stack: ["Unity", "C#"]},
    {title:"Can I sleep now?", image: g1, description:"A skill-based game in which you must dodge intrusive thoughts ", stack: "Unity, C#"},
    {title:"Shaaade!", image: g2, description:"A skill-based game in which you must choose from 4 shades of color, the lightest one", stack: "Unity, C#"},
    {title:"Generatore di scuse", image: g3, description:"A cute excuse simulator for not going out with friends", stack: "Unity, C#"},
]

const design = [
    {title:"Logo designs", image: [blackhorse, caffedellearti, lehibou, magnus, marvanza, friday], description:"A skill-based game in which you must dodge intrusive thoughts ", stack: "Adobe Photoshop, Adobe Illustrator"},
    {title:"Compositing", image: [hands, leaf, choice, manMiddle, manNowhere, touch], description:"A skill-based game in which you must choose from 4 shades of color, the lightest one", stack: "Adobe Photoshop, Adobe Illustrator"},
]


export default {multimedia, itchGames, web, design};