
export const getAllStocksMatchingSearch = (query, callbackFn) => {
	let apiUrl = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={query}&apikey=WKQA3GKM8RO4I9NT";

	apiUrl = apiUrl.replace("{query}",query);

	fetch(apiUrl)
	  .then(response => response.json())
	  .then(data => callbackFn && callbackFn(data));
}

export const getIndividualStockDetails = (symbol, callbackFn) => {
	let apiUrl = "https://www.alphavantage.co/query?function=OVERVIEW&symbol={symbol}&apikey=WKQA3GKM8RO4I9NT";

	apiUrl = apiUrl.replace("{symbol}",symbol);

	fetch(apiUrl)
	  .then(response => response.json())
	  .then(data => callbackFn && callbackFn(data));
}



export const debounce = (fn,delay) => {
	let timer ;
	return function(){
	  let context = this;
	  let args = arguments;
	  clearTimeout(timer)
	  timer = setTimeout(()=>{
	    fn.apply(context,args)
	  },delay);
	}
}

export const getOnlySymbols = (resultArr) => {
	return resultArr.map(obj => obj["1. symbol"]);
}

export const fillStockDetails = (dataToShow, resp) => {
	dataToShow.forEach((obj)=>{
		obj.value = resp[obj.keyName];
	})

	return dataToShow;
}
