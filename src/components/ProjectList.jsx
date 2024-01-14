import React from "react";
import DesignPortfolioImg from "../assets/images/design-portfolio.png";
import CountiresApiImg from "../assets/images/countries-api-bg.png";
import FyloLandingPageImg from "../assets/images/fylo-dark-theme-landing-page.png";
import JWeatherAppImg from "../assets/images/j-weather-app.png";
import WhackAMoleImg from "../assets/images/whack-a-mole.png";
import DictionaryAppImg from "../assets/images/dictionary-web-app.png";
import CountdownTimerImg from "../assets/images/countdown-timer.png";
import ThreeColComponentImg from "../assets/images/3-column-component.png";
import CheckoutPageImg from "../assets/images/checkout-page.png";
import AnalogueClockFaceImg from "../assets/images/analogue-clock-face.png";

analogue-clock-face.png

import ProjectBox from "./ProjectBox";
function ProjectList() {
	const projects = [
		{
			image: DictionaryAppImg,
			title: "DICTIONARY APP",
			tech: ["REACT", "TAILWINDCSS", "VITE"],
			previewLink: "https://jmosesessel.github.io/dictionary-web-app/",
			codeLink: "https://github.com/jmosesessel/dictionary-web-app",
		},
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
			previewLink:
				"https://jmosesessel.github.io/fylo-dark-theme-landing-page",
			codeLink:
				"https://github.com/jmosesessel/fylo-dark-theme-landing-page",
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
		{
			image: CountdownTimerImg,
			title: "COUNTDOWN TIMER",
			tech: ["HTML", "CSS", "JAVASCRIPT"],
			previewLink: "https://jmosesessel.github.io/count-down-timer/",
			codeLink: "https://github.com/jmosesessel/count-down-timer",
		},
		{
			image: ThreeColComponentImg,
			title: "3-COLUMN-PREVIEW-COMPONENT",
			tech: ["REACT", "TAILWINDCSS"],
			previewLink:
				"https://jmosesessel.github.io/3-column-preview-component/",
			codeLink:
				"https://github.com/jmosesessel/3-column-preview-component",
		},
		{
			image: CheckoutPageImg,
			title: "CHECKOUT PAGE",
			tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
			previewLink: "https://jmosesessel.github.io/WDDM115-Project1/",
			codeLink: "https://github.com/jmosesessel/WDDM115-Project1",
		},
		{
			image: AnalogueClockFaceImg,
			title: "ANALOGUE CLOCK FACE ANIMATION",
			tech: ["HTML", "CSS", "JAVASCRIPT"],
			previewLink: "https://jmosesessel.github.io/WDDM115-Project1/",
			codeLink: "https://github.com/jmosesessel/WDDM115-Project1",
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
