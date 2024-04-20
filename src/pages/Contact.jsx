import { useState } from "react";
import { Helmet } from 'react-helmet';
// Load CSS
import '../assets/styles/contact.scss';


export default function Contact() {

	const handleChange = (event) => {

	}

	const handleSubmit = (event) => {

	}

	return (
		<section className="contact">
			<Helmet>
				<title>Contact</title>
				<meta name="description" content="Contact form for inquiries and getting in touch"/>
			</Helmet>

			<form className="contact__form" onSubmit={handleSubmit}>
				<label className="contact__label" htmlFor="name">Name</label>
				<input className="contact__input" type="text" id="name" name="name" onChange={handleChange}/>

				<label className="contact__label" htmlFor="email">Email</label>
				<input className="contact__input" type="email" id="email" name="email" onChange={handleChange}/>

				<label className="contact__label" htmlFor="message">Message</label>
				<textarea className="contact__textarea" id="message" name="message" onChange={handleChange}/>

				<button className="contact__button" type="submit">Submit</button>
			</form>
		</section>
	);
}
