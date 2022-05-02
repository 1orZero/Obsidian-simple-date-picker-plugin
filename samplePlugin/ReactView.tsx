import dayjs from "dayjs";
import * as React from "react";
import Calendar from "./components/calendar";

export default function ReactView() {
	const time = dayjs().format("MMM YYYY");
	console.log(time);
	return (
		<div className="">
			<Calendar onClick={(date: string) => console.log(date)} />
		</div>
	);
}
