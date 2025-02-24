import React from "react";

const ArrowRightLongIcon = ({ size, fill, color }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
			<g
				id="Stockholm-icons-/-Navigation-/-Right-2"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
			>
				<polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
				<rect
					id="Rectangle"
					fill={fill || color}
					opacity="0.3"
					transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
					x="7.5"
					y="7.5"
					width="2"
					height="9"
					rx="1"
				></rect>
				<path
					d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
					id="Path-94"
					fill={fill || color}
					fill-rule="nonzero"
					transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
				></path>
			</g>
		</svg>
	);
};

export default ArrowRightLongIcon;
