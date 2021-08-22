import React, { useState, useEffect } from "react"

function Userdetails({ match }) {
	const [data, setdata] = useState()
	const [loaded, setloaded] = useState(false)

	//fetch data one time only
	useEffect(() => {
		fetch(`https://reqres.in/api/users/${match.params.id}`)
			.then(res => res.json())
			.then(res => {
				setdata(res.data)
				setloaded(true)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
	return (
		//if data is loaded

		loaded && (
			<div className="User">
				<div>
					<div className="user-wrapper">
						<div className="imageWrapper">
							<img src={data.avatar} alt="" />
						</div>
						<div className="name">
							<span className="firstname"> {data.first_name} </span>
							<span className="lastname"> {data.last_name} </span>
						</div>
						<div className="email">
							Email: <a href={`mailto:${data.email}`}>{data.email}</a>
						</div>
					</div>
				</div>
			</div>
		)
	)
}
export default Userdetails
