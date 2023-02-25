import { FC } from "react";
import UserInput from "../userinput";

const App: FC = () => {
	const onInputUserInput = (text: string) => {};

	return (
		<>
			<UserInput onInput={onInputUserInput} />
		</>
	);
};

export default App;
