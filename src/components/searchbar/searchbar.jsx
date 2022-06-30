import axios from "axios";
import { useEffect, useState } from "react";
import { search_bar_data } from "./searchbardata";
import "./searchbar.css"

export const Searchbar = ()=>{
    const [searchdata , setdata] = useState(search_bar_data)
    const [inputtxt , setinputxt] = useState("")
   console.log(inputtxt)
//  useEffect(()=>{
//    axios.get("https://github.com/samayo/country-json/blob/master/src/country-by-capital-city.json")
//    .then((r)=>setdata(r.data))
//    .catch((e)=>console.log(e))
//  },[])
//   console.log(searchdata)

  return(
    <div>
        <div class="in-div" >
            <input type="text" className="input" onChange={(e)=>{
            setinputxt(e.target.value)
        }} placeholder="search country name"/>
            <span className="material-icons">search</span>
        </div>
        {inputtxt.length !=0?  <div className="dropbox">
        {searchdata.filter((searchdata)=>searchdata.country.includes(inputtxt)).map((e)=>(
         <div class="dropdown">
         <p>{e.country}</p>
         <div class="dropdown-content">
         <p>City:{e.city}</p>
         </div>
       </div>
          
         
        ))}
    </div>: null}
        
    </div>
  )
}



