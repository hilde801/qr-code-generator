import React from "react";

import QrCode from "qrcode";

import ErrorBox from "../errorbox";
import OutputBox from "../outputbox";
import { Props as OutputBoxProps } from "../outputbox/props";

const App: React.FC = () => {
	const [output, setOutput] = React.useState(<></>);

	const createQrCode = async (input: string) => {
		try {
			const props: OutputBoxProps = {
				dataUri: await QrCode.toDataURL(input),
				previewContent: await QrCode.toString(input, { width: 128, margin: 0 }),
			};

			setOutput(<OutputBox {...props} />);
		} catch (error) {
			setOutput(<ErrorBox error={error as Error} />);
		}
	};

	React.useEffect(() => {
		createQrCode("").catch((error) => {
			setOutput(<ErrorBox error={error as Error} />);
		});
	}, []);

	return (
		<>
			<textarea
				onInput={async (event) => {
					event.preventDefault();
					await createQrCode(event.currentTarget.value);
				}}
			/>

			{output}
		</>
	);
};

export default App;
