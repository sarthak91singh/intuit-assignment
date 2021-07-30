import React, {useState, useEffect} from 'react';
import { getAllStocksMatchingSearch, debounce, getOnlySymbols, getIndividualStockDetails, fillStockDetails } from "../utilities/services";
import { dataToShow } from "../utilities/constants";

import CardComponent from "./CardComponent";

const Home = () => {

  let [query, setQuery] = useState("");
  let [matchingStocksList, setMatchingStocksList] = useState([]);
  let [stockDetails, setStockDetails] = useState([]);

  let fetchMatchingStocks = debounce(() => {
    getAllStocksMatchingSearch(query, (resp)=>{
      if(resp && resp.bestMatches){
        let allSymbolsMatched = getOnlySymbols(resp.bestMatches);
        setMatchingStocksList(allSymbolsMatched);
      }
    })
  }, 2000);

  useEffect(()=>{
    query && fetchMatchingStocks(query);
  },[query]);


  let searchHandler = (event) => {
    setQuery(event.target.value);
  }

  let renderOptions = () => {
    return matchingStocksList.map((symbol, index) => {
      return <option value={symbol} key={index}/>
    })
  }

  let onGettingStockDetails = (resp) => {
    let details = [];
    if(resp && Object.keys(resp).length>0){
      details = fillStockDetails(dataToShow, resp);
    }
    setStockDetails(details);
  }

  return(
      <div className="mainContainer">
        <header>
          <label for="symbol">Choose a Stock Symbol from the list:</label>
          <input list="symbols" name="symbol" id="symbol" value={query} onChange={searchHandler}/>
          <datalist id="symbols">
            {renderOptions()}
          </datalist>
          <button type="button" onClick={getIndividualStockDetails.bind(null,query, onGettingStockDetails)}>Search</button>
        </header>

        {(stockDetails.length>0) && <CardComponent stockDetails={stockDetails}/>}
      </div>
    )
}


export default Home;