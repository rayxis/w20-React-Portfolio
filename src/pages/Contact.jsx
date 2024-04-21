import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { contact } from '../data/contactData.js';
// Load CSS
import '../assets/styles/contact.scss';


export default () => {

	const handleChange = (event) => {

	};

	const handleSubmit = (event) => {

	};

	return (
		<main className="content contact">
			<Helmet>
				<title>Contact</title>
				<meta name="description" content="Contact form for inquiries and getting in touch"/>
			</Helmet>

			<header><h2>Contact</h2></header>

			<form className="contact__form" onSubmit={handleSubmit}>
				<div className="contact__form-group">
					<label className="contact__label" htmlFor="name">Name</label>
					<input className="contact__input" type="text" id="name" name="name" onChange={handleChange}/>
				</div>
				<div className="contact__form-group">
					<label className="contact__label" htmlFor="email">Email</label>
					<input className="contact__input" type="email" id="email" name="email" onChange={handleChange}/>
				</div>
				<div className="contact__form-group">
					<label className="contact__label" htmlFor="message">Message</label>
					<textarea className="contact__textarea" id="message" name="message" onChange={handleChange}/>
				</div>

				<div className="contact__form-group">
					<button className="contact__button" type="submit">Submit</button>
				</div>
			</form>
		</main>
	);
}
