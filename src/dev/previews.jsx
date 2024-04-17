import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import Menu from '../pages/Menu.jsx';

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree/>}>
			<ComponentPreview path="/Menu">
				<Menu/>
			</ComponentPreview>
		</Previews>
	);
};

export default ComponentPreviews;