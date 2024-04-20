import { Helmet } from 'react-helmet';
// Load CSS
import '../assets/styles/about.scss';

export default function About() {
	return (
		<div className="content about">
			<Helmet>
				<title>About</title>
				<meta name="description" content="This is the about page"/>
			</Helmet>
			<section className="about__overlay"></section>
			<section className="about__content">
				<header className="about__content__header">
					<h2 className="about__content__title">About Me</h2>
				</header>
				<p className="about__content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat eni, scelerisque vestibulum mi. Sed nec convallis enim, quis pretium metus.</p>
				<p className="about__content__text">Aliquam eget facilisis nunc. Cras non pretium sem. Donec imperdiet velit sed dui vehicula, at bibendum mauris cursus.</p>
				<p className="about__content__text">Mauris neque magna, suscipit et lobortis non, lacinia id felis. Aliquam id purus in orci mollis tincidunt. Nulla euismod ante ac lorem volutpat, a fringilla eros efficitur.</p>
				<p className="about__content__text">Nunc vitae felis blandit, tempus erat at, volutpat turpis. Vestibulum venenatis nibh a libero pulvinar consectetur. Quisque et eros augue.</p>
				<p className="about__content__text">Donec a fermentum ante. Quisque feugiat, ex id ornare elementum, libero urna condimentum nunc, ac semper metus sem a turpis.</p>
			</section>
		</div>
	);
}
