import React from "react";
import SkillBox from "./SkillBox";

function SkillsList() {
	const skills = [
		{ name: "HTML", years: 4 },
		{ name: "CSS", years: 4 },
		{ name: "Javascript", years: 4 },
		{ name: "Accessibility", years: 4 },
		{ name: "React", years: 3 },
		{ name: "Sass", years: 3 },
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
