import { FC, FormEvent, FormEventHandler, MouseEventHandler, useState } from "react";
import IconTrash from "../../icons/icontrash";
import UserInputProps from "./props";
import Style from "./style.module.css";

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
		<form className={Style.userInput}>
			<textarea onInput={onInputTextArea} className={Style.textArea}></textarea>

			<div className={Style.bottomToolbar}>
				<button type={"reset"} onClick={onClickResetButton} className={Style.clearButton}>
					<IconTrash />
				</button>

				<div className={Style.spacer}></div>

				<p className={Style.charCounter}>{`${inputLength} character(s)`}</p>
			</div>
		</form>
	);
};

export default UserInput;
