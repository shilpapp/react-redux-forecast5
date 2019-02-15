var apiUrl= 'https://samples.openweathermap.org/data/2.5/forecast?q=London,u&appid=b6907d289e10d714a6e88b30761fae22';
export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(apiUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}