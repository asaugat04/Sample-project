import { useState } from "react"
import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

import Userdetails from "./Userdetails"

//users:{data} is object destructuring it is equvilent to :
//function userlist(props)
//data = props.user.data

function Userlist({ users: { data } }) {
	const [sortby, changesortby] = useState("none")

	//update UI based on option selected on sortby menu
	const sortChange = event => {
		//sorting function
		data.sort((a, b) => {
			return a[event.target.value] < b[event.target.value] ? -1 : 0
		})
		//changing the sortby state
		changesortby(event.target.value)
	}

	const Usersdiv = data.map(user => {
		return (
			<Link to={`/user/${user.id}`} key={user.id}>
				<div className="users">
					<img
						src={user.avatar}
						alt={`user ${user.first_name}`}
						key={user.id}
					/>
					<div>
						<span> {user.first_name}</span>
						<span> {user.last_name}</span>
					</div>
				</div>
			</Link>
		)
	})
	// A functions which returns div containing all user details
	const Users = () => (
		<>
			<div className="users-wrapper">
				<div className="users-container">
					<select className="sort" value={sortby} onChange={sortChange}>
						{/* selection for sortind */}
						<option defaultValue hidden>
							Sort By
						</option>
						<option value="id">None</option>
						<option value="first_name">First Name</option>
						<option value="last_name">Last Name</option>
					</select>
					{/* renders all divs of user data */}
					{Usersdiv}
				</div>
			</div>
		</>
	)

	return (
		<Router>
			<Route exact path=" " component={Users} />
			<Route path="/user/:id" component={Userdetails} />
		</Router>
	)
}

export default Userlist
