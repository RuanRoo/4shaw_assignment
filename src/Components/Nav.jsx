import Performance from "./Performance"
import Convenience from "./Convenience";
import Local from "./Local";
import Personalised from "./Personalised";
import About from "./About";
import Vegan from "./Vegan";

import {Routes, Route, Link, useMatch, useResolvedPath} from 'react-router-dom'



function Nav() {
    

  return (
    <>
    <nav className="benefitsNav">
      <ul className="navBar">
        <li style={{ color: "white" }}>benefits</li>
        <li>|</li>
        <li><CustomLink to="/about">About</CustomLink></li>
        <li><CustomLink to="/">Performance</CustomLink></li>
        <li><CustomLink to="/convenience">Convenience</CustomLink></li>
        <li><CustomLink to="/local">Local</CustomLink></li>
        <li><CustomLink to="/personalised">Personalised</CustomLink></li>
        <li><CustomLink to="/vegan">Vegan</CustomLink></li>
      </ul>
    </nav>
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Performance />} />
    <Route path="/convenience" element={<Convenience />} />
    <Route path="/local" element={<Local />} />
    <Route path="/personalised" element={<Personalised />} />
    <Route path="/vegan" element={<Vegan />} />
  </Routes>
  </>

  );
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


export default Nav;

