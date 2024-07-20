import React from "react";

import QrCode from "qrcode";

import ErrorBox from "../errorbox";
import OutputBox from "../outputbox";
import { Props as OutputBoxProps } from "../outputbox/props";

const App: React.FC = () => {
	const [output, setOutput] = React.useState(<></>);

	return (
		<>
			<textarea
				onInput={async (event) => {
					event.preventDefault();

					try {
						const userInput: string = event.currentTarget.value;

						const props: OutputBoxProps = {
							dataUri: await QrCode.toDataURL(userInput),
							previewContent: await QrCode.toString(userInput, { width: 128, margin: 0 }),
						};

						setOutput(<OutputBox {...props} />);
					} catch (error) {
						console.log(error);
						setOutput(<ErrorBox error={error as Error} />);
					}
				}}
			/>

			{output}
		</>
	);
};

export default App;
