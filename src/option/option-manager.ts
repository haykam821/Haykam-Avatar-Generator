import { EventTarget } from "event-target-shim";
import Option from "./option";
import { loggers } from "../debug";

export default class OptionManager extends EventTarget {
	private readonly options: Record<string, Option<unknown>> = Object.fromEntries([{
		default: "#cdcdcd",
		description: "The color of the background.",
		key: "bgColor",
		type: "color",
	}, {
		description: "The color of the shapes' borders. If left blank, uses the 'new' border style in Diep.io.",
		key: "borderColor",
		placeholder: "#525252",
		type: "color",
	}, {
		default: 0,
		description: "The size of the corners to clip.",
		key: "cornerRadius",
		type: "number",
	}, {
		default: 16,
		description: "The amount of lines in the background.",
		key: "lineCount",
		type: "number",
	}, {
		default: 1,
		description: "The width of the lines in the background.",
		key: "lineWidth",
		type: "number",
	}, {
		default: "#c6c6c6",
		description: "The color of the background's lines.",
		key: "lineColor",
		type: "color",
	}, {
		default: "#8aff69",
		description: "The color of the outer square.",
		key: "squareColor",
		type: "color",
	}, {
		default: "#768cfc",
		description: "The color of the middle pentagon.",
		key: "pentagonColor",
		type: "color",
	}, {
		default: "#f177dd",
		description: "The color of the inner triangle.",
		key: "triangleColor",
		type: "color",
	}].map(control => {
		return [
			control.key,
			new Option<typeof control.default>(control.key, control.default, control.key, control.description, control.type, control.placeholder, {}),
		];
	}));
	private readonly optionArray: Option<unknown>[] = Object.values(this.options);

	getOptionArray(): Option<unknown>[] {
		return this.optionArray;
	}

	get(key: string): unknown {
		return this.options[key].value;
	}

	getString(key: string): string {
		return this.get(key) as string;
	}

	getNumber(key: string): number {
		return this.get(key) as number;
	}

	getAll(): Record<string, unknown> {
		return Object.fromEntries(Object.entries(this.options).map(([ key, option ]) => {
			return [
				key,
				option.value,
			];
		}));
	}

	isDefault(key: string): boolean {
		return this.getString(key) === this.options[key].defaultValue;
	}

	set(key: string, value: unknown): void {
		if (this.options[key]) {
			loggers.editor("setting option '%s' to '%s'", key, value);
			this.options[key].value = value;
			this.dispatchEvent(new Event("update"));
		}
	}

	private setSilently(key: string, value: unknown): void {
		if (this.options[key]) {
			this.options[key].value = value;
		}
	}

	restoreFromParams(params: URLSearchParams): void {
		for (const [ key, value ] of params) {
			this.setSilently(key, value);
		}
	}
}