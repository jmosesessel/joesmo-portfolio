import React from "react";

function SkillBox({skills}) {
	return (
		<>
			{skills.map((skill) => (
				<div key={skill.name} className=" my-6 text-p-white flex flex-col justify-center items-center">
					<h2 className=" font-bolder text-[2.5rem]">{skill.name}</h2>
                    <p className=" text-p-grey text-base">{skill.years} Years Experience</p>
                    
                </div>
			))}
		</>
	);
}

export default SkillBox;
