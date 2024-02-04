import React from "react";

function ContactForm() {
	return (
		<>
			<div id="contact-form">
                <form action="" className="flex flex-col gap-8 transparent">
                    <input className=" focus:border-b-p-green bg-p-dark-grey border-b-[0.0625rem] pt-0 pb-[1.06rem] px-6 text-base font-normal placeholder:font-normal text-p-white border-b-p-grey focus:outline-none focus-visible:ring-0" type="text" placeholder="NAME" />
                    <input className=" focus:border-b-p-green bg-p-dark-grey border-b-[0.0625rem] pt-0 pb-[1.06rem] px-6 text-base font-normal placeholder:font-normal text-p-white border-b-p-grey focus:outline-none focus-visible:ring-0" type="email" placeholder="EMAIL" />
                    <textarea className="h-[6.6875rem] focus:border-b-p-green bg-p-dark-grey border-b-[0.0625rem] pt-0 pb-[1.06rem] px-6 text-base font-normal placeholder:font-normal text-p-white border-b-p-grey focus:outline-none focus-visible:ring-0" name="" id="" cols="30" rows="10" placeholder="MESSAGE"></textarea>
                    <div className="flex justify-end">
                        <button className="text-p-white pb-2 border-b-2 hover:text-p-green border-b-p-green" type="submit">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
		</>
	);
}

export default ContactForm;
