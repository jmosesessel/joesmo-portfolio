import React from "react";
import ContactForm from "./ContactForm";

function ContactBox() {
	return (
		<>
			<div className="grid grid-cols-1 justify-center items-center">
				<h1 className="text-[2.5rem] mb-5 text-p-white text-center">Contact</h1>
				<p className="text-base text-p-grey text-center mb-[3.12rem]">
					I would love to hear about your project and how I could
					help. Please fill in the form, and I’ll get back to you as
					soon as possible.
				</p>

                <div>
					<ContactForm />
				</div>

                <div>

                </div>
			</div>
		</>
	);
}

export default ContactBox;
