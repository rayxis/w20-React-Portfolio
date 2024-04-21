import { Helmet } from 'react-helmet';
import { proficiencies, resumeLink } from '../data/resumeData.js';
// Load CSS
import '../assets/styles/resume.scss';

export default () => (
	<main className="content resume">
		<Helmet>
			<title>Resume</title>
			<meta name="description"
			      content="View proficiency skills on the resume page. Proficiencies are categorized for easy reading and include a range of skills. The resume can also be downloaded for offline viewing."/>
		</Helmet>

		<section className="resume__section proficient">
			<header className="proficient__header"></header>
			{Object.entries(proficiencies).map(([category, { title, items }]) => (
				<div className="proficient__item" key={category}>
					<h3 className="proficient__name">{title}</h3>
					<ul>
						{items.map((skill, index) => <li key={index}>{skill}</li>)}
					</ul>
				</div>
			))}
		</section>

		<section className="resume__section proficient">
			<a href={resumeLink} target="_blank">Download my resume</a>
		</section>
	</main>
);
