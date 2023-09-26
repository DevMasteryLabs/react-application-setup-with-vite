function Navbar() {
  return (
    <nav className='navbar navbar-expand navbar-light bg-light'>
      <div className='container'>
        <span className='navbar-brand'>MyApp</span>
        <div className='navbar-nav'>
          <a className='nav-link' href='/'>Home</a>
          <a className='nav-link' href='/posts'>Posts</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar