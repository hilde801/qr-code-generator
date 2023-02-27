import { FC, useEffect, useState } from "react";
import AppDetails from "../appdetails";
import ErrorOutput from "../erroroutput";
import QRCodeOutput from "../qrcodeoutput";
import UserInput from "../userinput";
import { encodeInputToQRCode } from "./helpers";
import QRCodeResult from "./qrcoderesult";

const App: FC = () => {
	const [result, setResult] = useState<QRCodeResult>({
		isSuccess: false,
		result: ""
	});

	useEffect(() => {
		encodeInputToQRCode().then((value) => setResult(value));
	}, []);

	const onInputUserInput = async (text: string): Promise<void> => {
		setResult(await encodeInputToQRCode(text));
	};

	return (
		<>
			<UserInput onInput={onInputUserInput} />

			<output>{result.isSuccess ? <QRCodeOutput dataURL={result.result} /> : <ErrorOutput errorMessage={result.result} />}</output>

			<AppDetails />
		</>
	);
};

export default App;
