import { unmountComponentAtNode } from 'react-dom';

export const isolateRenderTest = (containerElement) => {
	beforeEach(() => {
		// setup a DOM element as a render target
		container = document.createElement('div');
		document.body.appendChild(containerElement);
	});

	afterEach(() => {
		// cleanup on exiting
		unmountComponentAtNode(containerElement);
		containerElement.remove();
		containerElement = null;
	});
};

export const isolateTimerTest = (containerElement) => {
	beforeEach(() => {
		// setup a DOM element as a render target
		containerElement = document.createElement("div");
		document.body.appendChild(containerElement);
		jest.useFakeTimers();
	  });
	  
	  afterEach(() => {
		// cleanup on exiting
		unmountComponentAtNode(containerElement);
		containerElement.remove();
		containerElement = null;
		jest.useRealTimers();
	  });

}