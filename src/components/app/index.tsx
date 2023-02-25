import { FC, useRef, useState } from "react";
import QRCodeOutput from "../qrcodeoutput";
import UserInput from "../userinput";
import { encodeInputToQRCode } from "./helpers";

const App: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(document.createElement("canvas"));

	const [result, setResult] = useState<any>(async () => await encodeInputToQRCode(canvasRef.current, ""));

	const onInputUserInput = async (text: string): Promise<void> => {
		setResult(await encodeInputToQRCode(canvasRef.current, text));
	};

	return (
		<>
			<UserInput onInput={onInputUserInput} />
			<output>{typeof result === "string" ? <QRCodeOutput dataURL={result} /> : <p>{(result as Error).message}</p>}</output>
		</>
	);
};

export default App;
