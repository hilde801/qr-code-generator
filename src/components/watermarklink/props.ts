// This file is a part of QR Code Generator (https://github.com/hilde801/qr-code-generator)
// Copyright (c) 2023 Hilder Gill (hilde801) <hildergill@gmail.com>

type WatermarkLinkProps = {
	href: string;
	text: string;
	download?: string;
	openInNewTab?: boolean;
	icon: any;
};

export default WatermarkLinkProps;
