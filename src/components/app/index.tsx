import { FC, useEffect, useRef, useState } from "react";
import AppDetails from "../appdetails";
import ErrorOutput from "../erroroutput";
import QRCodeOutput from "../qrcodeoutput";
import UserInput from "../userinput";
import { encodeInputToQRCode } from "./helpers";

const App: FC = () => {
	const [result, setResult] = useState<any>({});

	useEffect(() => {
		encodeInputToQRCode().then((value) => setResult(value));
	}, []);

	const onInputUserInput = async (text: string): Promise<void> => {
		setResult(await encodeInputToQRCode(text));
	};

	return (
		<>
			<UserInput onInput={onInputUserInput} />

			<output>{typeof result === "string" ? <QRCodeOutput dataURL={result} /> : <ErrorOutput errorMessage={result.result} />}</output>

			<AppDetails />
		</>
	);
};

export default App;
