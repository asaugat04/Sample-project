import loaderImage from "./../images/loader.svg"
import React from "react"

function Loader() {
	return (
		<div className="loadingContainer">
			<h2>Loading</h2>
			<img src={loaderImage} alt="" />
		</div>
	)
}

export default Loader
