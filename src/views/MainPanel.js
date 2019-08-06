//import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import Marquee from '@enact/moonstone/Marquee';
import SpeechRecognition from '../components/SpeechRecognition';
const MainPanel = kind({
	name: 'MainPanel',
	render: (props) => (
		<Panel {...props}>
			<Header title="LG HACKATHON" />
			<Marquee marqueeOn="render">Welcome to LG Hackathon. This is a notepad app for tv where users can turn there speech to text...Welcome to LG Hackathon. This is a notepad app for tv where users can turn there speech to text.....Welcome to LG Hackathon. This is a notepad app for tv where users can turn there speech to text....Welcome to LG Hackathon. This is a notepad app for tv where users can turn there speech to text</Marquee>
			<SpeechRecognition />
		</Panel>
	)
});

export default MainPanel;