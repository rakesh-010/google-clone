import React, { useState } from "react";
import "./searchPage.css";
import useGoogleSearch from '../hooks/useGoogleSearch';
// import response from "../hooks/response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  // <input type="text" value={input} onChange={handleOnChange}/>
  // <button onClick={search}>ajv</button>

    const [searchItem]=useState(localStorage.getItem('searchItem'));
    const {data}=useGoogleSearch(searchItem); //LIVE API CALL
//   const data = response;
//   console.log(data.items);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="img"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButton />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <CropOriginalIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/description">News</Link>
              </div>
              <div className="searchPage_option">
                <YouTubeIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="searchPage_option">
                <ShoppingCartIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/setting">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data &&(
      <div className="searchPage_results">
        <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {searchItem}
        </p>

        {data?.items.map((item)=>{
            return<>
                <div className="searchPage_result">
                    <div className="searchPage_resultsLink">
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src &&(
                                <img className="searchPage_resultImage" src={item.pagemap?.cse_image[0]?.src} alt=""/>
                            )}
                            {item.displayLink}</a>
                    </div>
                    <a className="searchPage_resultTitle" href={item.link}>
                        <h2>{item.title}</h2>
                    </a>
                    <p className="searchPage_resultSnippet">
                        {item.snippet}
                    </p>
                </div>
            </>
        })
        }
      </div>

      )}
    </div>
  );
}

export default SearchPage;
