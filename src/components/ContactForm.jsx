import React from "react";

function ContactForm() {
	return (
		<>
			<div>
                <form action="" className="flex flex-col gap-8">
                    <input className=" bg-p-dark-grey border-b-[0.0625rem] pt-0 pb-[1.06rem] px-6 text-base font-normal placeholder:font-normal text-p-white border-b-p-grey focus:outline-none focus-visible:ring-0" type="text" placeholder="NAME" />
                    <input className=" bg-p-dark-grey border-b-[0.0625rem] pt-0 pb-[1.06rem] px-6 text-base font-normal placeholder:font-normal text-p-white border-b-p-grey focus:outline-none focus-visible:ring-0" type="email" placeholder="EMAIL" />
                    <textarea className="h-[6.6875rem] bg-p-dark-grey border-b-[0.0625rem] pt-0 pb-[1.06rem] px-6 text-base font-normal placeholder:font-normal text-p-white border-b-p-grey focus:outline-none focus-visible:ring-0" name="" id="" cols="30" rows="10" placeholder="MESSAGE"></textarea>
                    <div className="flex justify-end">
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
		</>
	);
}

export default ContactForm;
