import { NavLink, useParams } from "react-router-dom";

const TanamanInfo = () => {
    const { id } = useParams();

    return (
    <div className="flex flex-col">
        <h1>TanamanInfo</h1>
        <p>Tanaman: {id}</p>
        <NavLink to="/">Homepage</NavLink>
    </div>
  )
}

export default TanamanInfo