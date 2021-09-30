import React, { useEffect, useRef } from "react";
import { Field, Input, Radio } from "../core-components/Elements";
import DateInput from "./DateInput";
import useForm from "./UseForm";
import validate from "./Validate";

const Form = () => {
	const { inputs, handleInputChange, handleSubmit, errors } = useForm(
		{ email: "", password: "" },
		validate
	);

	const inputRef = useRef([]);
	useEffect(() => {
		if (errors.email !== "") inputRef.current["email"].focus();
		else if (errors.password !== "") inputRef.current["password"].focus();
	});

	return (
		<form
			noValidate="novalidate"
			onSubmit={(e) => {
				e.preventDefault();
				e.nativeEvent.stopImmediatePropagation();
				handleSubmit();
			}}
		>
			<h2>Create an account</h2>
			<Input
				label="Enter your email"
				labelFor="email"
				type="email"
				val={inputs.email}
				handleInputChange={handleInputChange}
				error={errors["email"]}
				inputRef={(el) => (inputRef.current["email"] = el)}
			/>
			<Field>
				<label>
					Date of birth
					<span className="optional">(Optional)</span>
				</label>
				<DateInput />
			</Field>
			<Input
				label="Choose a strong password"
				labelFor="password"
				type="password"
				val={inputs.password}
				handleInputChange={handleInputChange}
				error={errors["password"]}
				inputRef={(el) => (inputRef.current["password"] = el)}
			/>
			<Field>
				<label>Are you an agency or individual?</label>
				<Radio title="agency" values={["Individual", "Agency"]} />
			</Field>
			<Field>
				<button>Submit</button>
			</Field>
		</form>
	);
};
export default Form;
