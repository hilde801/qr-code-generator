import { toDataURL } from "qrcode";

export const encodeInputToQRCode = async (canvas: HTMLCanvasElement, text: string): Promise<any> => {
	try {
		return await toDataURL(canvas, text);
	} catch (error) {
		return error as Error;
	}
};
