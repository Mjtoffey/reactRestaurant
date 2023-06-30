import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Shy Guys Fries
      </Link>
      <ul>
        <CustomLink to="/Appetizers">Appetizers</CustomLink>
        <CustomLink to="/Breakfast">Breakfast</CustomLink>
        <CustomLink to="/Lunch">Lunch</CustomLink>
        <CustomLink to="/Dinner">Dinner</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}