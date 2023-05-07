import {useState,useEffect} from 'react';
import API_KEY from '../keys';

const CONTEXT_KEY="274bfe56fc2132726";

const useGoogleSearch=(term)=> {
  const [data,setData]=useState(null);

  useEffect(()=>{
    const fetchData=async()=>{
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
        .then(res=>{
            res.json()//local storage ko khali karna hai baad mai
            .then(result=>{
                setData(result);
            })
        })
    }
    fetchData();
  },[term])

  return{data};
};

export default useGoogleSearch