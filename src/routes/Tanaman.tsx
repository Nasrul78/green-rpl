import { NavLink } from "react-router-dom"

const Tanaman = () => {
  return (
    <div className="flex flex-col">
        <h1>Tanaman</h1>
        <NavLink to="/tanaman/1">Tanaman 1</NavLink>
        <NavLink to="/tanaman/2">Tanaman 2</NavLink>
        <NavLink to="/tanaman/3">Tanaman 3</NavLink>
        <NavLink to="/">Homepage</NavLink>
    </div>
  )
}

export default Tanaman