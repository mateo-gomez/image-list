import React from "react";

import "../assets/styles/components/Button.scss";

const Button = ({ text, color, children, variant, className, ...rest }) => {
	color = color && color.toLowerCase();
	variant = variant && variant.toLowerCase();

	return (
		<button className={`${className} btn-${variant} btn-${color}`} {...rest}>
			{text || children}
		</button>
	);
};

export default Button;
