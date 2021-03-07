import React, {useState} from 'react';
import MenuItem from '../data.json'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleMenu=()=>{
    setOpen(!open)
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbrand">
          <h1>
            <a href="" className="brand">
              My Site
            </a>
          </h1>
          <div className={`burger ${open ? 'active' : ''}`} onClick={handleMenu}>
            <span className="burger-open">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                <g fill="#252a32">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                </g>
              </svg>
            </span>
            <span className="burger-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  fill="#252a32"
                  d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                />
              </svg>
            </span>
          </div>
        </div>
        <ul className={`menu ${open ? 'active' : ''}`}>
          {
            MenuItem.map((item)=>(
              <li className="menu-item" key={item.id}>
                <a href="#" className="menu-link">
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;