import React from "react";
import { DateField, Select } from "../core-components/Elements";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function generateArrayOfYears() {
	let max = new Date().getFullYear();
	let min = max - 30;
	let years = [];

	for (let i = max; i >= min; i--) {
		years.push(i);
	}
	return years;
}

const years = generateArrayOfYears();

const DateInput = () => (
	<div className="date">
		<DateField label="Date" classes="W(24%)">
			<input type="number" min="1" max="31" />
		</DateField>
		<DateField label="Month" classes="W(35%) Mstart(3%)">
			<Select>
				{months.map((month, i) => (
					<option key={i}>{month}</option>
				))}
			</Select>
		</DateField>
		<DateField label="Year" classes="W(35%) Mstart(3%)">
			<Select>
				{years.map((year, i) => (
					<option key={i}>{year}</option>
				))}
			</Select>
		</DateField>
	</div>
);
export default DateInput;
