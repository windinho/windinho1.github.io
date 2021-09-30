const validate = (inputs) => {
	const errors = { email: "", password: "" };
	if (!inputs.email) {
		errors.email = "Please Enter Email";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
		errors.email = "Please add valid email address";
	}

	if (!inputs.password) {
		errors.password = "Please Enter Password";
	} else if (inputs.password.length < 6) {
		errors.password = "Password must be at least 6 characters";
	} else if (!/(?=.*)(?=.*\d)(?=.{6}).*$/i.test(inputs.password)) {
		errors.password = "Password must have a numeric value";
	}

	return errors;
};

export default validate;
