import React from "react";
import DesignPortfolioImg from "../assets/images/design-portfolio.svg";
import ProjectBox from "./ProjectBox";
function ProjectList() {
	const projects = [
		{
			image: DesignPortfolioImg,
			title: "DESIGN PORTFOLIO",
			tech: ["HTML", "CSS"],
			previewLink: "",
			codeLink: "",
		},
        {
			image: DesignPortfolioImg,
			title: "DESIGN PORTFOLIO",
			tech: ["HTML", "CSS"],
			previewLink: "",
			codeLink: "",
		},
		{
			image: DesignPortfolioImg,
			title: "DESIGN PORTFOLIO",
			tech: ["HTML", "CSS"],
			previewLink: "",
			codeLink: "",
		},
		{
			image: DesignPortfolioImg,
			title: "DESIGN PORTFOLIO",
			tech: ["HTML", "CSS"],
			previewLink: "",
			codeLink: "",
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
