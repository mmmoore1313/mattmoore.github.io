import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.scss'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  const location = useLocation()
  
  const trackScreenWidth = () => {
    const width = window.innerWidth
    setScreenWidth(width)
    if (width > 800) {
      setOpen(true)
    }
  }
  
  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false)
    }
  }
  
  useEffect(() => {
    trackScreenWidth()
    window.addEventListener("resize", trackScreenWidth)
    return () => window.removeEventListener('resize', trackScreenWidth)
  }, [])
  
  return (
    <nav className='navbar'>
      <div className='nav-wrapper'>
        <div className='logo'>
          <Link to='/'>
          <img
            src={`${process.env.PUBLIC_URL}/circleMatt.jpeg`}
            alt='Matt'
          />
          </Link>
        </div>
        <div className='list-wrapper'>
          <img 
            src='https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true'
            alt='close'
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open)
            }}
          />
          <img 
            src='https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true'
            alt='menu'
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open)
            }}
          />
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
              onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#4071f4" }}
                to='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
              onClick={handleClose}
                style={{ color: location.pathname === "/projects" && "#4071f4" }}
                to='/projects'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
              onClick={handleClose}
                style={{ color: location.pathname === "/tutorials" && "#4071f4" }}
                to='/tutorials'
              >
                Tutorials
              </Link>
            </li>
            <li>
              <Link
              onClick={handleClose}
                style={{ color: location.pathname === "/blog" && "#4071f4" }}
                to='/blog'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
              onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#4071f4" }}
                to='/contact'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar