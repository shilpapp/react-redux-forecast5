import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
export class Post extends Component {
constructor() {
super();
}

componentDidMount() {
this.props.getData();
}

render() {
return (

this.props.foreCastArray.map(el =>(
el.dt && (
<div className="forecast col" key={el.dt}>
<div className="forecast-header">
<div className="day">{weekday[new Date(el.dt_txt).getDay()]}</div>
{new Date(el.dt_txt).toLocaleDateString()}
</div>
<div className="forecast-content">
{el.weather[0].description}
<div className="forecast-icon">
<img src={`src/images/icons/${el.weather[0].description}.svg`}  alt="Weather" width="48"/>
</div>
<div><div className="degree">{el.main.temp}</div><small>(Kelvin)</small></div>
<span><img src="src/images/icon-wind.png" alt="Wind Speed"/>{el.wind.speed}m/s</span>
</div>
</div>

))));}}

function mapStateToProps(state) {
const removeDuplicates = (array, key) => {
return array.reduce((arr, item) => {
const removed = arr.filter(i => i[key] !== item[key]);
return [...removed, item];
}, []);
};
return {
// foreCastArray:[],
city:[],
foreCastArray: removeDuplicates(state.foreCastArray.map(function(x){ x.dt  =  new Date(x.dt_txt).getDate(); return x;}),'dt') || []
//state.foreCastArray.slice(0, 10)
};
}

export default connect(
mapStateToProps,
{ getData }
)(Post);

