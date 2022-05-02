import { App, Modal } from "obsidian";
import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import ReactView from "./ReactView";

export class DatePickerView extends Modal {
	root: Root;
	constructor(app: App) {
		super(app);
		const container = this.containerEl.children[1];
		this.root = createRoot(container!);
	}

	async onOpen() {
		this.root.render(<ReactView />);
	}

	async onClose() {
		this.root.unmount();
	}
}
