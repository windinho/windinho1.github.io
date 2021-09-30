import { useState } from "react";

const useForm = (initialValues, validate) => {
	const [inputs, setInputs] = useState(initialValues);
	const [errors, setErrors] = useState({ email: "", password: "" });

	const handleSubmit = (event) => {
		const validationErrors = validate(inputs);
		setErrors(validationErrors);

		validationErrors.email === "" &&
			validationErrors.password === "" &&
			alert("Form submitted successfully");
	};

	const handleInputChange = (event) => {
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));
	};

	return {
		handleSubmit,
		handleInputChange,
		inputs,
		errors,
	};
};

export default useForm;
