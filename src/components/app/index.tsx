import React from "react";

import QrCode from "qrcode";

import ErrorBox from "../errorbox";

const App: React.FC = () => {
	const [output, setOutput] = React.useState(<></>);

	return (
		<>
			<textarea
				onInput={async (event) => {
					event.preventDefault();

					// TODO Add something here later

					try {
						const uri: string = await QrCode.toDataURL(event.currentTarget.value);
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
