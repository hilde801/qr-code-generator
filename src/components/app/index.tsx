import React from "react";

import QrCode from "qrcode";

import ErrorBox from "../errorbox";
import OutputBox from "../outputbox";
import { Props as OutputBoxProps } from "../outputbox/props";

type UserInputEvent = React.FormEvent<HTMLTextAreaElement>;
type UserInputHandler = React.FormEventHandler<HTMLTextAreaElement>;

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

	const onInputUserInput: UserInputHandler = async (event: UserInputEvent) => {
		event.preventDefault();
		await createQrCode(event.currentTarget.value);
	};

	return (
		<>
			<textarea onInput={onInputUserInput} />

			{output}
		</>
	);
};

export default App;
