import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="bg-p-black flex flex-col w-full h-full min-h-screen font-space-grotesk">
        <Header />
      </div>
		</>
	);
}

export default App;
