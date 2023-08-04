import React from "react";
import SkillBox from "./SkillBox";

function SkillsList() {
	const skills = [
		{ name: "HTML", years: 6 },
		{ name: "CSS", years: 6 },
		{ name: "Javascript", years: 6 },
		{ name: "Accessibility", years: 4 },
		{ name: "React.js", years: 1 },
		{ name: "Vue.js", years: 4 },
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
