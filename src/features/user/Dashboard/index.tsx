import Helmet from '@Components/Helmet';
import Slider from './components/Slider';
import Section from '@Components/SectionWrapper';
import { Slides } from '@Data/UserHomeSlider';

const Index = () => {
	return (
		<>
			<Helmet
				title='Dashboard'
				content='choose your favourate course and start building your carrier'
			/>
			<Section id='dashboard'>
				<Slider slides={Slides} />
			</Section>
		</>
	);
};

export default Index;
