import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import SkillsList from "./components/SkillsList";
import ProjectList from "./components/ProjectList";
import ContactBox from './components/ContactBox'
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="w-full h-full min-h-screen font-space-grotesk">
				{/* Header Area */}
				<div className="bg-p-black pb-20 px-4 md:px-8 flex flex-col ">
					<Header />
					<SkillsList />
					<ProjectList />
				</div>

				{/* Footer Area */}
				<div className=" bg-p-dark-grey py-14 px-4 md:px-8">
					<ContactBox />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
