import Calendar from "components/calendar";
import { App, Modal } from "obsidian";
import * as React from "react";
import { createRoot, Root } from "react-dom/client";

export class DatePickerView extends Modal {
	root: Root;
	constructor(app: App) {
		super(app);
		const container = this.containerEl.children[1];
		this.root = createRoot(container!);
	}

	async onOpen() {
		this.root.render(
			<Calendar onClick={(date: string) => console.log(date)} />
		);
	}

	async onClose() {
		this.root.unmount();
	}
}
