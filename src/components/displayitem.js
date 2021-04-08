import React from 'react';
// import {doApiGet, URL_API } from '../services/apiservice';

function DisplayItem(props) {
  let item = props.name;
  console.log(item)
//   let item = doApiGet(URL_API)

  return (
    <React.Fragment>
        <div className="info">
          <img src={item.flag} width="200px" alt={item.name+"'s flag"}/>
          <h1>{item.name}</h1>
          <p>pop:{item.population}</p>
          <p>region:{item.region}</p>
          <p>languages:{item.languages[0].name}</p>
          <p>coin:{item.currencies[0].name}</p>
          <p>capital:{item.capital}</p>
    
        </div>
    </React.Fragment>
  );
}

export default DisplayItem;
