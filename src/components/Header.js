import React, { useRef, useState } from 'react';
import {doApiGet, URL_API } from '../services/apiservice';
import DisplayItem from './displayitem';


function Header() {
  let refCountry = useRef();
  let [name,setName] = useState();
  const searchCountry = async () =>{
    let data = await doApiGet(URL_API + refCountry.current.value);
   setName(data[0]);
  }
  

    
// }

  return (
    <div className="Header">
      <input defaultValue={"china"} className="HeaderInput" type="text" ref={refCountry} />
      <button className="HeaderButton" onClick={searchCountry}>Search</button>
     {name?<DisplayItem name={name}/>:<div></div>}
    
    </div>
  );
}

export default Header;
