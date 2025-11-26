import { NavLink } from "react-router-dom"

const About = () => {
  return (
    <div className="flex flex-col">
        <h1>About</h1>
        <NavLink to="/">Homepage</NavLink>
    </div>
  )
}

export default About