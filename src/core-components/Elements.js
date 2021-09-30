import React from "react";
import "./Elements.scss";

export const Field = ({ children }) => <div className="field">{children}</div>;

export const DateField = ({ children, label }) => (
	<div className="date-field">
		<label>{label}</label>
		{children}
	</div>
);

export const Select = ({ children }) => <select>{children}</select>;

export const Radio = ({ values, title }) => (
	<div className="radios">
		{values.map((val, i) => (
			<div key={i}>
				<input type="radio" id={val} name={title} />
				<label htmlFor={val}>{val}</label>
			</div>
		))}
	</div>
);

export const Input = ({
	label,
	labelFor,
	type,
	val,
	handleInputChange,
	error,
	inputRef,
}) => {
	return (
		<Field>
			<label htmlFor={labelFor}>{label}</label>
			<div className="input">
				<input
					value={val}
					name={type}
					type={type}
					id={labelFor}
					onChange={handleInputChange}
					className={`${error !== "" ? "error" : ""}`}
					ref={inputRef}
				/>
				{error !== "" && <div className="error-message">{error}</div>}
			</div>
		</Field>
	);
};
