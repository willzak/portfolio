import ProjectItem from "./ProjectItem";

import "../styles/projects.sass";

export default function ProjectList(props) {

  const projects = [
    {
      title: "MonopoRead",
      desc: "The Reading Competition App that Promotes Minority Writers",
      stack: "React, Ruby on Rails, CSS, Figma, Heroku",
      github: "https://github.com/willzak/MonopoRead",
      design: "/monoporead",
      img: "/monoporead_board.png",
      alt: "MonopoRead game board",
      timeframe: "10 days, November 2020",
      role: "Front-End Developer, Design Lead",
    },
    {
      title: "Web Portfolio",
      desc: "Personal Website Highlighting Portfolio Work",
      stack: "React, Material UI, Sketch",
      github: "https://github.com/willzak/portfolio",
      img: "/vision-board.png",
      alt: "website vision board",
      timeframe: "3 days (+ ongoing), December 2020",
      role: "Fullstack Developer + Designer"
    },
    {
      title: "Jungle",
      desc: "A Ruby on Rails Based E-Commerce App",
      stack: "Ruby on Rails, Stripe, Active Record, SCSS",
      github: "https://github.com/willzak/jungle",
      img: "/jungle.png",
      alt: "image of jungle in action",
      timeframe: "1 week, November 2020",
      role: "Fullstack Developer"
    },
    {
      title: "Scheduler",
      desc: "The React Based Interview Scheduling App",
      stack: "React, Storybook, Jest & Cypress, Axios",
      github: "https://github.com/willzak/scheduler",
      img: "/scheduler.gif",
      alt: "gif of user using app to schedule appointments",
      timeframe: "5 days, November 2020",
      role: "React Developer"
    },
    {
      title: "WikiMaps",
      desc: "The Map App For Your Favourite Places",
      stack: "Node.js, Express with RESTful routes, Bulma CSS Framework, SASS, JQuery, PostgreSQL",
      github: "https://github.com/willzak/Midterm-WikiMap",
      img: "/wikimaps.gif",
      alt: "Screenshot of WikiMaps App",
      timeframe: "1 week, October, 2020",
      role: "Fullstack Developer"
    },
  ]

  const projList = projects.map(item => {
    return (
      <ProjectItem 
        title={item.title}
        desc={item.desc}
        stack={item.stack}
        github={item.github}
        design={item.design}
        img={item.img}
        alt={item.alt}
        timeframe={item.timeframe}
        role={item.role}
      />
    )
  })

  return (
    <div className="proj-list">{projList}</div>
  )
}