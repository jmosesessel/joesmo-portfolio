import React from "react";

function ProjectBox({ projects }) {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
				{projects.map((project, index) => (
					<div key={index} className=" flex flex-col text-p-white">
						<img
							className="w-full h-[15.8125rem] lg:w-[34.11306rem] lg:h-[25rem] lg:z-20 lg:hover:z-0 lg:hover:opacity-50 mb-6"
							src={project.image}
							alt=""
						/>
						<h2 className=" text-p-white text-2xl font-bold">
							{project.title}
						</h2>
						<div className="flex gap-5 mb-5">
							{project.tech.map((tech, index) => (
								<div
									key={index}
									className=" uppercase text-p-grey text-lg"
								>
									{tech}
								</div>
							))}
						</div>

						<div className="flex gap-8 lg:absolute lg:w-[34.11306rem] lg:h-[25rem] lg:z-10 lg:hover:z-40 lg:bg-opacity-75 lg:bg-p-black lg:flex-col lg:justify-center lg:items-center">
							<h2 className="text-p-white text-base block border-b-2 pb-2 border-b-p-green hover:text-p-green">
								<a className=" cursor-pointer" href={project.previewLink} target="_blank" rel="noopener noreferrer">VIEW PROJECT</a> 
							</h2>
							<h2 className="text-p-white text-base block border-b-2 pb-2 border-b-p-green hover:text-p-green">
								<a className=" cursor-pointer" href={project.codeLink} target="_blank" rel="noopener noreferrer">VIEW CODE</a> 
							</h2>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default ProjectBox;
