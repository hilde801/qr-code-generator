import { FC, FormEvent, FormEventHandler, MouseEventHandler, useState } from "react";
import IconTrash from "../../icons/icontrash";
import UserInputProps from "./props";

const UserInput: FC<UserInputProps> = (props: UserInputProps) => {
	const [inputLength, setInputLength] = useState<number>(0);

	const onInputTextArea: FormEventHandler = (event: FormEvent<HTMLTextAreaElement>): void => {
		event.preventDefault();

		setInputLength(event.currentTarget.value.length);
		props.onInput(event.currentTarget.value);
	};

	const onClickResetButton: MouseEventHandler = () => {
		setInputLength(0);
		props.onInput("");
	};

	return (
		<form>
			<textarea onInput={onInputTextArea}></textarea>

			<button type={"reset"} onClick={onClickResetButton}>
				<IconTrash />
			</button>

			<p>{`Input length: ${inputLength}`}</p>
		</form>
	);
};

export default UserInput;
