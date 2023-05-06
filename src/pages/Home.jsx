import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search'

function Home() {
  return (
    <div className='home'>
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>

        <div className="home_headerRight">
        <Link to='/gmail'>Gmail</Link>
        <Link to='/images'>Images</Link>
        <AppsIcon />
        <AccountCircleIcon className='avatar'/>
        </div>
      </div>
      <div className="home_body">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="img" />
        <div className="gome_imputContainer">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home