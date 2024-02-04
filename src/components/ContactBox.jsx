import React from "react";
import ContactForm from "./ContactForm";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function ContactBox() {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[13.75rem] justify-center items-center lg:items-start md:mx-[10.13rem]">
				<div>
					<h1 className="text-[2.5rem] lg:text-[5.5rem] mb-5 lg:text-left text-p-white text-center">
						Contact
					</h1>
					<p className="text-base lg:text-[1.125rem] text-p-grey text-center lg:text-left mb-[3.12rem]">
						I would love to hear about your project and how I could
						help. Please fill in the form, and I’ll get back to you
						as soon as possible.
					</p>
					<div className="flex items-center mb-1 gap-2 text-base lg:text-[1.125rem] text-p-white">
						<HiOutlineMail className="text-3xl text-p-green" />
						<h2>jmosesessel21@gmail.com</h2>
					</div>
					<div className="flex items-center mb-[3.12rem] gap-2 text-base lg:text-[1.125rem] text-p-white">
						<HiOutlinePhone className="text-3xl text-p-green" />
						<h2>+1(437) 438-1635</h2>{" "}
					</div>
				</div>

				<div>
					<ContactForm />
				</div>
			</div>
		</>
	);
}

export default ContactBox;
