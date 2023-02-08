import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [json, setJson] = useState("");
	useEffect(() => {
		async function getData() {
			const response = await fetch("/openapi2.json");
			const json1 = await response.json();
			setJson(...json, json1);
			console.log(json1);
		}
		getData();
	}, []);
	return <div>{JSON.stringify(json)}</div>;
}

export default App;
