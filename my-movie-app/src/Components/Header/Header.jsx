import React from 'react'
import '../Header/Header.scss'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
    return (
        <div>
            <div className='nav_bar'>
                <div className='logo'>
                     {/* <MovieIcon /> */}
                    <h2><LocalMoviesIcon className='icon movie_icon' />  Movflix</h2>
                </div>
                <div className="nav_bar_items">
                    <ul>
                        <li className='home'>HOME</li>
                        <li> MOVIE</li>
                        <li>TV SHOW</li>
                        <li>PRICING</li>
                        <li>BLOG</li>
                        <li>CONTACTS</li>
                    </ul>
                </div>
                <div className='nav_bar_side'>
                    <SearchIcon className='search'/>
                    <LanguageIcon className='globe'/>
                    <span>EN
                        <KeyboardArrowDownIcon/> 
                        <ul className='lang_menu'>
                            <li>EN</li>
                            <li>AU</li>
                            <li>AR</li>
                            <li>TU</li>
                        </ul>
                    </span>
                    
                    <button>SIGN IN</button>
                </div>
            </div>


        </div>
    )
    
}

export default Header