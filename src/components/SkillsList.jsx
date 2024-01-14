import React from "react";
import SkillBox from "./SkillBox";

function SkillsList() {
	const skills = [
		{ name: "HTML", years: 13 },
		{ name: "CSS", years: 13 },
		{ name: "Javascript", years: 13 },
		{ name: "TailwindCSS", years: 3 },
		{ name: "Accessibility", years: 5 },
		{ name: "React.js", years: 4 },
		{ name: "Vue.js", years: 6 },
		{ name: "C#", years: 5 },
		{ name: "ASP.NET Core", years: 5 },
	];
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 py-10 border-y-2 border-y-p-grey ">
				<SkillBox skills={skills} />
			</div>
		</>
	);
}

export default SkillsList;
