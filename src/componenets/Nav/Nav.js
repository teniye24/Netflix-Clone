import React, {useState, useEffect} from 'react'
import "./Nav.css"
import logo from "./Logonetflix.png"
import avatar from "./Netflix-avatar.png"

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleShow]);

      return (
        <div className={`nav ${show && "nav_black"}`}>
          <img className="nav_logo" src={logo} alt="Netflix Logo" />

          <img
            className="nav_avatar"
            src={avatar}
            alt="Netflix avatar"
          />
        </div>
      );
}

export default Nav