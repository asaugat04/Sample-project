import "./App.css"
import Userlist from "./components/Dependencies/Userlist.js"
import Loader from "./components/Dependencies/loader"
import React, { useState, useEffect } from "react"

function App() {
	const [userData, setData] = useState({})
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		fetch("https://reqres.in/api/users?delay=3")
			.then(res => res.json())
			.then(res => {
				setData(res)
				setLoaded(true)
			})
			.catch(err => {
				console.error(`ERROR:: ${err}`)

				//JUST FOR OFFLINE DEBUGGING PURPOSE START
				//****************MUST DELETE IT LATER**********************//

				/* setData({
					data: [
						{
							avatar: "google.com",
							id: 2,
							first_name: "Fname",
							last_name: "Lname",
						},
						{
							avatar: "google.com",
							id: 3,
							first_name: "Fname2",
							last_name: "Lname2",
						},
					],
				})
				setTimeout(() => {
					setLoaded(true)
				}, 4000) */
				//****************MUST DELETE IT LATER**********************//
				//JUST FOR OFFLINE DEBUGGING PURPOSE END
			})
	}, [])

	return <>{loaded ? <Userlist users={userData} /> : <Loader />}</>
}

export default App
