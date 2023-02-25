import { toDataURL } from "qrcode";
import QRCodeResult from "./qrcoderesult";

export const encodeInputToQRCode = (text?: string): Promise<QRCodeResult> =>
	new Promise<QRCodeResult>(async (resolve) => {
		const canvas: HTMLCanvasElement = document.createElement("canvas");

		toDataURL(canvas, text ?? "", (error, dataURL) => {
			return resolve({
				isSuccess: error == null,
				result: error == null ? dataURL : (error as Error).message
			});
		});
	});
