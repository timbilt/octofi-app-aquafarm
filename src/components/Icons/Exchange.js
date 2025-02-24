import React from "react";

const ExchangeIcon = ({ size, fill, color }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
			<g
				id="Stockholm-icons-/-Navigation-/-Exchange"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
				<rect
					id="Rectangle"
					fill={fill || color}
					opacity="0.3"
					transform="translate(13.000000, 6.000000) rotate(-450.000000) translate(-13.000000, -6.000000) "
					x="12"
					y="8.8817842e-16"
					width="2"
					height="12"
					rx="1"
				></rect>
				<path
					d="M9.79289322,3.79289322 C10.1834175,3.40236893 10.8165825,3.40236893 11.2071068,3.79289322 C11.5976311,4.18341751 11.5976311,4.81658249 11.2071068,5.20710678 L8.20710678,8.20710678 C7.81658249,8.59763107 7.18341751,8.59763107 6.79289322,8.20710678 L3.79289322,5.20710678 C3.40236893,4.81658249 3.40236893,4.18341751 3.79289322,3.79289322 C4.18341751,3.40236893 4.81658249,3.40236893 5.20710678,3.79289322 L7.5,6.08578644 L9.79289322,3.79289322 Z"
					id="Path-104"
					fill={fill || color}
					fill-rule="nonzero"
					transform="translate(7.500000, 6.000000) rotate(-270.000000) translate(-7.500000, -6.000000) "
				></path>
				<rect
					id="Rectangle-Copy"
					fill={fill || color}
					opacity="0.3"
					transform="translate(11.000000, 18.000000) scale(1, -1) rotate(90.000000) translate(-11.000000, -18.000000) "
					x="10"
					y="12"
					width="2"
					height="12"
					rx="1"
				></rect>
				<path
					d="M18.7928932,15.7928932 C19.1834175,15.4023689 19.8165825,15.4023689 20.2071068,15.7928932 C20.5976311,16.1834175 20.5976311,16.8165825 20.2071068,17.2071068 L17.2071068,20.2071068 C16.8165825,20.5976311 16.1834175,20.5976311 15.7928932,20.2071068 L12.7928932,17.2071068 C12.4023689,16.8165825 12.4023689,16.1834175 12.7928932,15.7928932 C13.1834175,15.4023689 13.8165825,15.4023689 14.2071068,15.7928932 L16.5,18.0857864 L18.7928932,15.7928932 Z"
					id="Path-104-Copy"
					fill={fill || color}
					fill-rule="nonzero"
					transform="translate(16.500000, 18.000000) scale(1, -1) rotate(270.000000) translate(-16.500000, -18.000000) "
				></path>
			</g>
		</svg>
	);
};

export default ExchangeIcon;
