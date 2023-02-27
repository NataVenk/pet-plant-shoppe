import React from 'react';
import Searchlist from '../../components/Searchlist/Searchlist';
import Contact from '../../components/Contact/Contact';
import "./Checkp.scss";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { BY_ANIMAL, BY_PLANTNAME } from '../../utils/queries';



const Checkp = () => {

  const [value, setValue] = useState("");
  const {data, loading, refetch} = useQuery(BY_PLANTNAME, {variables: {name:value}})

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
     refetch()
    console.log("search ", searchTerm);
  };

  console.log(data)
  const plantInfo = data?.specificPlantS || []

  return (
    <div className='checkp'> 
    <div className="App">
    <div className="search-container">
      <div className="search-inner">
      <h2>search plant's name to see if this plant Safe for Cats and Dogs</h2>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)}> Search </button>
      </div>
      {plantInfo.map(plant => (
        <div>
          <h1>{plant.name}</h1>
        </div>
      ))}
      {/* <div className="dropdown">
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.full_name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onSearch(item.full_name)}
              className="dropdown-row"
              key={item.full_name}
            >
              {item.full_name}
            </div>
          ))}
      </div> */}
    </div>
  </div>
  <ul class="suggestions-list" role="navigation">
          <li><a href="/">cat friendly</a></li>
          <li><a href="/">dog friendly</a></li>

    </ul>
      <Searchlist/>
      <Contact/>
    </div>
  )
}

export default Checkp;