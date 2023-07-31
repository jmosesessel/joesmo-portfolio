import React from "react";
import {
	SiGithub,
	SiFrontendmentor,
	SiLinkedin,
	SiTwitter,
} from "react-icons/si";

function SocialBox() {
	return (
		<>
			<div className="flex flex-col md:flex-row text-p-white gap-5 justify-center md:justify-between items-center">
				<h2 className="text-2xl text-p-white">joesmo</h2>
				<div className="w-[9.62463rem] h-5 flex justify-between items-center">
					<SiGithub />
					<SiFrontendmentor />
					<SiLinkedin />
					<SiTwitter />
				</div>
			</div>
		</>
	);
}

export default SocialBox;
