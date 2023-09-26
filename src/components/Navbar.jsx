import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand navbar-light bg-light'>
      <div className='container'>
        <span className='navbar-brand'>MyApp</span>
        <div className='navbar-nav'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link' to='/posts'>Posts</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar