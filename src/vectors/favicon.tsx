import React from "react";

import { SVGProps } from "react";

const Favicon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.458 26.458" {...props}>
		<path
			d="M0 0h26.458v26.458H0z"
			style={{
				fill: "#e5e5e5",
				fillOpacity: 1,
				strokeWidth: 0.264583,
				strokeLinecap: "round",
			}}
		/>
		<path
			d="M3.307 3.307h19.844v19.844H3.307z"
			style={{
				fill: "#22262f",
				fillOpacity: 1,
				strokeWidth: 0.264583,
				strokeLinecap: "round",
			}}
		/>
		<path
			d="M6.615 6.615h13.229v13.229H6.615z"
			style={{
				fill: "#e5e5e5",
				fillOpacity: 1,
				strokeWidth: 0.264583,
				strokeLinecap: "round",
			}}
		/>
		<path
			d="M9.922 9.922h6.615v6.615H9.922z"
			style={{
				fill: "#22262f",
				fillOpacity: 1,
				strokeWidth: 0.264583,
				strokeLinecap: "round",
			}}
		/>
	</svg>
);
export default Favicon;
