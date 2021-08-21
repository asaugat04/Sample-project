import React, { useState, useEffect } from "react"
//ALSO DElETE THIS IMPORT
import Image from "./../images/Image.png"

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

				//JUST FOR OFFLINE DEBUGGING PURPOSE START
				//****************MUST DELETE IT LATER**********************//

				setdata({
					avatar: Image,
					id: 2,
					first_name: "Fname",
					last_name: "Lname",
					email: "gmail.email@yahoo.com",
				})
				setloaded(true)
				//****************MUST DELETE IT LATER**********************//
				//JUST FOR OFFLINE DEBUGGING PURPOSE END
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
