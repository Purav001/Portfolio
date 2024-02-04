import indovina from "../images/works/indovina.gif"
import gameLab from "../images/works/gameLab.gif"
import mudima from "../images/works/mudima.gif"
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
    {title:"Company website", image: tea, description:"Site created for the company Tea s.r.l.", stack: "Wordpress, Elementor", duration: 0.1, link: "https://www.teacz.com/"},
    {title:"E-commerce (Demo)",image: ecommerce, description:"An e-commerce prototype site", stack: "React.js, TailwindCSS", duration: 0.12, link: "https://georgelafayen.github.io/E-commerce-prototype/"},
    {title:"Company website", image: ecommerce, description:"An e-commerce prototype site", stack: "React.js, TailwindCSS", duration: 0.13, link: "https://georgelafayen.github.io/E-commerce-prototype/"},
    // {title:"Company website", image: ecommerce, description:"An e-commerce prototype site", stack: "React.js, TailwindCSS", duration: 0.13, link: "https://georgelafayen.github.io/E-commerce-prototype/"}
]

const multimedia = [
    {title: "Mudima Games", image: mudima, description:"Interactive game for museum visitors made for Museo diocesano di Altamura", stack: "Unity, C#", duration: 0.14},
    {title:"Game Labs", image: gameLab, description:"Interactive game for museum visitors made for Museo diocesano di Santa Severina", stack: "Unity, C#", duration: 0.15},
    {title:"Indovina il santo!", image: indovina, description:"Interactive game for museum visitors made for Museo diocesano di Lamezia Terme", stack: "Unity, C#", duration: 0.16},
]

const itchGames = [
    {title:"Can I sleep now?", image: g1, description:"A skill-based game in which you must dodge intrusive thoughts ", stack: "Unity, C#", duration: 0.17, link: "https://lafayenbros.itch.io/can-i-sleep-now"},
    {title:"Shaaade!", image: g2, description:"A skill-based game in which you must choose from 4 shades of color, the lightest one", stack: "Unity, C#", duration: 0.18, link: "https://lafayenbros.itch.io/shaaade"},
    {title:"Generatore di scuse", image: g3, description:"A cute excuse simulator for not going out with friends", stack: "Unity, C#", duration: 0.19, link: "https://lafayenbros.itch.io/generatore-di-scuse-per-non-uscire-con-gli-amici-la-sera"},
]

const design = [
    {title:"Logo designs", image: [blackhorse, caffedellearti, lehibou, magnus, marvanza, friday], description:"A skill-based game in which you must dodge intrusive thoughts ", stack: "Adobe Photoshop, Adobe Illustrator", duration: 0.2},
    {title:"Compositing", image: [hands, leaf, choice, manMiddle, manNowhere, touch], description:"A skill-based game in which you must choose from 4 shades of color, the lightest one", stack: "Adobe Photoshop, Adobe Illustrator", duration: 0.21},
]


export default {multimedia, itchGames, web, design};