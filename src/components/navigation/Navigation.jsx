import { Link } from "react-router-dom"
import Profile from './Profile'
import Wishlist from './Wishlist'
import Bag from './Bag'
import Logo from '../../assets/Myntra-icon-logo.svg'
import { useDispatch } from "react-redux"
import { setSearchString } from "../../features/filters/filterSlice"
import './Navigation.css'
import './Useractions.css'
import { BsSearch } from "react-icons/bs"
import IconMenu_hamburger from "../ant-icons/IconMenu_hamburger"
import { useRef } from "react"


/**
 * Navigation Component. It is rendered in al pages.
 * 
 */
export default function Navigation() {

    const dispatch = useDispatch();
    const navToggle = useRef();

    // Set search string state using onInput event
    function handleSearch(value){
        dispatch(setSearchString(value))
    }

    function handleNavToggle(){
        navToggle.current.classList.toggle("show")
    }

    return (
        <div className="navbar-wrapper">
  
            <div className="container-lg">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/"><img src={Logo} alt="Myntra logo" /></Link>
                    </div>
                    <div className="nav-menu-wrapper" ref={navToggle}>
                        <ul className="nav-menu1">
                            <li className="nav-list">
                                <Link to=".." className="nav-link">men</Link>
                            </li>
                            <li className="nav-list">
                                <Link to=".." className="nav-link">women</Link>
                            </li>
                            <li className="nav-list">
                                <Link to=".." className="nav-link">kids</Link>
                            </li>
                            <li className="nav-list">
                                <Link to=".." className="nav-link">home & living</Link>
                            </li>
                            <li className="nav-list">
                                <Link to=".." className="nav-link">beauty</Link>
                            </li>
                            <li className="nav-list">
                                <Link to=".." className="nav-link">studio<span className="new">new</span></Link>
                            </li>
                        </ul>
                        <div className="search-container">
                            <span className="search-icon"><BsSearch /></span>
                            <input type="search" name="searchbar" id="searchbar" className="search-bar" placeholder="Search for brands and products here..." onInput={e => handleSearch(e.target.value)}/>
                        </div>
                        <div className="user-actions">
                            <Profile/>
                            <Wishlist/>
                            <Bag />
                        </div>
                    </div>


                    <div className="nav-toggle" onClick={handleNavToggle}>
                        <IconMenu_hamburger width="2.5rem" height="2.5rem" />
                    </div>

              </nav>
          </div>
        
      </div>
    )
  }