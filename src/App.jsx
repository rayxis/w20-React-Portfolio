import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { menuItems } from './routes';
import { Footer, Header } from './components';
import { About, Contact, NotFound, Portfolio, Resume } from './pages';
// Load CSS
import './assets/styles/main.scss';
import { Helmet } from 'react-helmet';

export default function App() {
	return (
		<Router>
			<Helmet defaultTitle="Home"
			        titleTemplate="%s | Ray Beliveau"/>
			<Header/>

			<Routes>
				{menuItems.map(({ path, page: Page }) => (
					<Route key={path} path={path} element={<Page/>}/>
				))}
				<Route path="/" element={<About/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>

			<Footer/>
		</Router>
	);
}
