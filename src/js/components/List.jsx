import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state =>{
	return { city : state.city };
};

const ConnectedList = ({city  }) => (
<ul className="">
{city.map(el =>(
<li className key={el.key}>
{el.title}
</li>

))}
</ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;