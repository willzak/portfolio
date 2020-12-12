import Job from "./Job";

const JobList = (props) => {

  const positions = [
    {
      img: "/ubc_logo.png",
      website: "https://sociology.ubc.ca/",
      alt: "UBC Logo",
      title: "University of British Columbia: Department of Sociology",
      desc: "Communications and PR work focused on:",
      roles: [
        "Managing internal + external wordpress websites,",
        "Designing tri-annual newsletters and achieving highest CTRs to date, and",
        "Content creation for department Blog, Twitter, Facebook, and LinkedIn"
      ]
    },
    {
      img: "/kotn_logo.jpg",
      website: "https://kotn.ca/",
      alt: "kotn logo",
      title: "Kotn: Egyptian Cotton Basics",
      desc: "While working as a Key Holder at Kotn I was able to:",
      roles: [
        "Work with Store Manager to develop a new CRM system in combination with a design project from UBC",
        "Gain an understand of retail operations on an international scale",
        "Track daily store analytics and help in adjusting the store to promote different products"
      ]
    },
    {
      img: '/relate_logo.png',
      website: "https://relate-app.com/",
      alt: "Relate App Logo",
      title: 'Relate: Values-Based Dating App',
      desc: 'Marketing internship focusing on:',
      roles: [
        "Event promotion, planning, and organization of upcoming speed dating event,",
        "Social media marketing strategy and analytics, and",
        "Creating a campaign to capture a new target demographic."
      ]
    }
  ]

  const jobs = positions.map(job => {
    return (
      <Job
        img={job.img}
        website={job.website}
        alt={job.alt}
        title={job.title}
        desc={job.desc}
        roles={job.roles}
      />
    )
  })

  return (
    <div className="job-list">{jobs}</div>
  )

}

export default JobList;