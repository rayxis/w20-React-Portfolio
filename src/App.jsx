import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { menuItems } from './routes';
import { Header } from './components';
import { About, Contact, NotFound, Portfolio, Resume } from './pages';
// Load CSS
import './assets/styles/main.scss';

export default function App() {
	return (
		<Router>
			<Header/>

			<main>
				<Routes>
					{menuItems.map(({ path, page: Page }) => (
						<Route key={path} path={path} element={<Page />}/>
					))}
					<Route path="*" element={<NotFound />}/>
				</Routes>
			</main>
		</Router>
	);
}
