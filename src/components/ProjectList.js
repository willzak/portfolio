import ProjectItem from "./ProjectItem";

import "../styles/projects.sass";

export default function ProjectList(props) {

  const projects = [
    {
      title: "Web Portfolio",
      desc: "The main goal of this website was to be able to have a place to house my projects, but also to have it as a playground for continous growth to change as I do. To the side you can see the vision board I used, which is created from things, people, music, places, and books that have been inspiring me lately. From that I was able to create the colour scheme, layout, and use it as a frame of reference for the project",
      stack: "React, Material UI, Sketch",
      github: "https://github.com/willzak/portfolio",
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
    {
      title: "Jungle",
      desc: "Welcome to the jungle! Jungle is a web-based mini-ecommerce app built as a project for Lighthouse Labs. The project was partially completed when I took over on it, where I implemented the UI for the checkout cart, added 'sold out' badges on products with no inventory, and included logins and permissions.",
      stack: "Ruby on Rails, Stripe, Active Record, SCSS",
      github: "https://github.com/willzak/jungle",
      img: "/jungle.png",
      alt: "image of jungle in action",
      timeframe: "1 week, November 2020",
      role: "Full-Stack Developer"
    },
    {
      title: "Scheduler",
      desc: "Scheduler is a React App that takes advantage of React's hooks and state features to allow users to schedule appointments on different days, at different times, with different interviewers.",
      stack: "React, Storybook, Jest & Cypress, Axios",
      github: "https://github.com/willzak/scheduler",
      img: "/scheduler.gif",
      alt: "gif of user using app to schedule appointments",
      timeframe: "5 days, November 2020",
      role: "React Developer"
    },
    {
      title: "WikiMaps",
      desc: "Wikimaps was created for my midterm group project at Lighthouse Labs, Wikimaps is a single-page application in which users with accounts can create, edit, view, and delete maps with no, one, or many points of interest.",
      stack: "NodeJS, Express with RESTful routes, Bulma CSS Framework, SASS, JQuery, PostgreSQL",
      github: "https://github.com/willzak/Midterm-WikiMap",
      img: "/wikimaps.gif",
      alt: "Screenshot of WikiMaps App",
      timeframe: "1 week, October, 2020",
      role: "Full-Stack Developer"
    }
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