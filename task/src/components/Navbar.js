import React from 'react';
import {Link} from 'react-router-dom';


let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to='/' className='navbar-brand'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/2/2b/Augment_logo.png' alt="" width='100' height='50' />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-2">
              <Link to='/inspiration' className='nav-link'>
                Inspiration <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/find-work' className='nav-link'>Find Work</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to='/lern-design' className='nav-link'>Lern Design</Link>
            </li>
            <li className="nav-item">
              <Link to='/go-pro' className='nav-link'>Go Pro</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to='/marketPlace' className='nav-link'>MarketPlace</Link>
            </li>
            <li className="nav-item">
              <Link to='/hireDesigners' className='nav-link'>Hire Designers</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
            <button className="btn btn-sm my-2 my-sm-0 signBtn text-dark" type="submit">Sign in</button>
            <button className="btn btn-sm my-2 my-sm-0 signBtn signup" type="submit">Sign up</button>
          </form>
        </div>
      </nav>
    </React.Fragment>
  )
}
export default Navbar;