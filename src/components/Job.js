import "../styles/job.sass";

export default function Job(props) {

  const roles = props.roles.map(role => {
    return (
      <li>{role}</li>
    )
  })

  return (
    <div className="job-container">
      <a href={props.website}><img src={window.location.origin + props.img} alt={props.alt} className="logo" /></a>
      <div className="desc-container">
        <h4>{props.title}</h4>
        <div>{props.desc}</div>
        <ul>{roles}</ul>
      </div>
    </div>
  )
}