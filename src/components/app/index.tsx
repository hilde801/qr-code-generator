// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import { FC, useEffect, useState } from "react";
import AppDetails from "../appdetails";
import ErrorOutput from "../erroroutput";
import QRCodeOutput from "../qrcodeoutput";
import UserInput from "../userinput";
import { encodeInputToQRCode } from "./helpers";
import QRCodeResult from "./qrcoderesult";
import Style from "./style.module.css";

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

			<output className={Style.outputContainer}>
				{result.isSuccess ? <QRCodeOutput dataURL={result.result} /> : <ErrorOutput errorMessage={result.result} />}
			</output>

			<AppDetails />
		</>
	);
};

export default App;
