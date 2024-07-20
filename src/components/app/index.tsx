import React from "react";

const App: React.FC = () => {
	return (
		<>
			<textarea
				onInput={(event) => {
					event.preventDefault();

					// TODO Add something here later

					console.log(event.currentTarget.value);
				}}
			/>
		</>
	);
};

export default App;
