import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import SkillsList from "./components/SkillsList";
import ProjectList from "./components/ProjectList";

function App() {
	return (
		<>
			<div className="bg-p-black pb-20 flex flex-col w-full h-full min-h-screen font-space-grotesk">
				<Header />
				<SkillsList />
				<ProjectList />
			</div>
		</>
	);
}

export default App;
