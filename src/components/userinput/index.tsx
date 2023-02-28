// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

import { FC, FormEvent, FormEventHandler, MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import IconTrash from "../../icons/icontrash";
import UserInputProps from "./props";
import Style from "./style.module.css";

const UserInput: FC<UserInputProps> = (props: UserInputProps) => {
	const [charCount, setCharCount] = useState<number>(0);

	const { t } = useTranslation();

	const onInputTextArea: FormEventHandler = (event: FormEvent<HTMLTextAreaElement>): void => {
		event.preventDefault();

		setCharCount(event.currentTarget.value.length);
		props.onInput(event.currentTarget.value);
	};

	const onClickResetButton: MouseEventHandler = () => {
		setCharCount(0);
		props.onInput("");
	};

	return (
		<form className={Style.userInput}>
			<textarea onInput={onInputTextArea} className={Style.textArea} placeholder={t("userInputPrompt")!!}></textarea>

			<div className={Style.bottomToolbar}>
				<button type={"reset"} onClick={onClickResetButton} className={Style.clearButton} title={t("clearUserInputTitle")!!}>
					<IconTrash />
				</button>

				<div className={Style.spacer}></div>

				<p className={Style.charCounter}>{t("characterCounterText", { count: charCount })}</p>
			</div>
		</form>
	);
};

export default UserInput;
