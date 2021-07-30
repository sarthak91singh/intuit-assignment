import React, {useState, useEffect} from 'react';

const CardComponent = ({stockDetails}) => {
	let renderDetails = (obj, index) => {
		return stockDetails.map((obj,index) => {
					return (
						<div key={index}>
							<span className="label">{obj.label} : </span>
							<span className="value">{obj.value}</span>
						</div>
					)
				})
		
	}

	return (
		<div className="cardContainer">
			{ renderDetails() }
		</div>
	)
}

export default CardComponent;