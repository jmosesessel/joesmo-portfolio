import React from "react";

function ProjectBox({ projects }) {
	return (
		<>
			<div className="flex flex-col gap-[2.5rem]">
				{projects.map((project, index) => (
					<div key={index} className="flex flex-col text-p-white">
						<img
							className="w-full h-[15.8125rem] mb-6"
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

						<div className="flex gap-8">
							<h2 className="text-p-white text-base block border-b-2 pb-2 border-b-p-green ">
								VIEW PROJECT
							</h2>
							<h2 className="text-p-white text-base block border-b-2 pb-2 border-b-p-green ">
								VIEW CODE
							</h2>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default ProjectBox;
