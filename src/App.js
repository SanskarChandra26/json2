import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	// const config = {
	// 	headers: {
	// 		accept: "application/json",
	// 	},
	// 	data: {},
	// };
	const [json, setJson] = useState([]);
	useEffect(() => {
		async function getData() {
			const response = await fetch("http://localhost:3000/posts");
			const json1 = await response.json();
			setJson(...json, json1);
			console.log(json1);
		}
		getData();
	}, []);
	return <div>{JSON.stringify(json)}</div>;
}

export default App;
