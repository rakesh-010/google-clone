import React,{useState} from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// import { useStateValue } from "../StateProvider";
// import { actionTypes } from "../reducer";

function Search({hideButton=false}) {
    //making hideButton false as default value

    // const[dispatch]=useStateValue();
    const [input,setInput]=useState('');

    const navigate=useNavigate();

    const search=(event)=>{
        event.preventDefault();
        // console.log("Search");

        localStorage.setItem('searchItem',input);
        // dispatch({
        //   type:actionTypes.SET_SEARCH_TERM,
        //   term:input,
        // })


        navigate('/search');
    }

    

    const handleOnChange=(event)=>{
        // console.log(event);
        setInput(event.target.value);
    }
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input type="text" onChange={handleOnChange} value={input} />
        <MicIcon />
      </div>

      {!hideButton?(
      <div className="search_buttons">
        <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
        <Button variant="outlined" >I'm Feeling Lucky</Button>
      </div>
      ):(
        <div className="search_buttons">
        <Button className="search_buttonsHidden" type="submit" variant="outlined" onClick={search}>Google Search</Button>
        <Button className="search_buttonsHidden" variant="outlined" >I'm Feeling Lucky</Button>
      </div>
      )}
      
    </form>
  );
}

export default Search;
