// src/js/actions/index.js
import {ADD_CITY,DATA_LOADED} from "../constants/action-types"
export function addArticle(payload) {
	return {type:"ADD_CITY",payload};
	// body...
}

export function getData() {

	const apiUrl= 'https://cors-anywhere.herokuapp.com/http://samples.openweathermap.org/data/2.5/forecast?q=London,u&appid=b6907d289e10d714a6e88b30761fae22';
//var apiUrl= 'https://jsonplaceholder.typicode.com/posts';

return function(dispatch) {
	return fetch(apiUrl,{headers: {
		/*'Access-Control-Allow-Origin' : 'http://localhost', 
		'Access-Control-Allow-Origins' : 'http://localhost',*/
		"Access-Control-Allow-Headers": "X-Requested-With",
		 'Content-Type': 'application/json'}})
	.then(response => response.json())
	.then(json => {
		dispatch({ type: "DATA_LOADED", payload: json.list });
	}
	,
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        	dispatch({ type: "Error", payload: error });
        });
};
}
