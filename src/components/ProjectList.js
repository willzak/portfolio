import ProjectItem from "./ProjectItem";

import "../styles/projects.sass";

export default function ProjectList(props) {

  const projects = [
    {
      title: "Web Portfolio",
      desc: "The main goal of this website was to be able to have a place to house my projects, but also to have it as a playground for continous growth to change as I do. To the side you can see the vision board I used, which is created from things, people, music, places, and books that have been inspiring me lately. From that I was able to create the colour scheme, layout, and use it as a frame of reference for the project",
      stack: "React, Material UI, Sketch",
      img: "/vision-board.png",
      alt: "website vision board",
      timeframe: "3 days (+ ongoing), December 2020",
      role: "Full-Stack Developer + Designer"
    },
    {
      title: "MonopoRead",
      desc: "Born out of a mutual love for reading, a need to connect in news ways during the spread of COVID-19, and a much needed push to highlight disenfranchised authors, MonopoRead challenges players to read more books by gamifying the process and giving book suggestions.",
      stack: "React, Ruby on Rails, CSS, Figma, Heroku",
      github: "https://github.com/willzak/MonopoRead",
      img: "/monoporead_board.png",
      alt: "MonopoRead game board",
      timeframe: "10 days, November 2020",
      role: "Front-End Developer, Design Lead",
    },
  ]

  const projList = projects.map(item => {
    return (
      <ProjectItem 
        title={item.title}
        desc={item.desc}
        stack={item.stack}
        github={item.github}
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