import React from "react";
import DesignPortfolioImg from "../assets/images/design-portfolio.png";
import CountiresApiImg from "../assets/images/countries-api-bg.png";
import FyloLandingPageImg from "../assets/images/fylo-dark-theme-landing-page.png"
import JWeatherAppImg from "../assets/images/j-weather-app.png"
import WhackAMoleImg from "../assets/images/whack-a-mole.png"




import ProjectBox from "./ProjectBox";
function ProjectList() {
	const projects = [
		{
			image: CountiresApiImg,
			title: "COUNTRIES API",
			tech: ["REACT", "TAILWINDCSS", "VITE"],
			previewLink: "https://jmosesessel.github.io/countries-api-app",
			codeLink: "https://github.com/jmosesessel/joesmo-portfolio",
		},
		{
			image: FyloLandingPageImg,
			title: "FYLO LANDING PAGE",
			tech: ["REACT", "TAILWINDCSS", "VITE"],
			previewLink: "https://jmosesessel.github.io/fylo-dark-theme-landing-page",
			codeLink: "https://github.com/jmosesessel/fylo-dark-theme-landing-page",
		},
		{
			image: JWeatherAppImg,
			title: "J-WEATHER APP",
			tech: ["VUE.JS", "TAILWINDCSS", "VITE"],
			previewLink: "https://jmosesessel.github.io/j-weather-app/",
			codeLink: "https://github.com/jmosesessel/j-weather-app",
		},
		{
			image: WhackAMoleImg,
			title: "WHACK-A-MOLE GAME",
			tech: ["HTML", "CSS", "JAVASCRIPT"],
			previewLink: "https://jmosesessel.github.io/whack-a-mole-game/",
			codeLink: "https://github.com/jmosesessel/whack-a-mole-game",
		},
	];
	return (
		<>
			<div className="flex flex-col text-p-white">
				<div className="flex flex-row justify-between items-center mb-10">
					<h2 className=" text-[2.5rem]">Projects</h2>
					<h3 className="text-base block border-b-2 pb-2 border-b-p-green">
						CONTACT ME
					</h3>
				</div>
				<ProjectBox projects={projects} />
			</div>
		</>
	);
}

export default ProjectList;
