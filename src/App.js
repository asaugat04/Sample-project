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
			})
	}, [])

	return <>{loaded ? <Userlist users={userData} /> : <Loader />}</>
}

export default App
