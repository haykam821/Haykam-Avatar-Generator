export default class Option<T> {
	readonly key: string;
	readonly defaultValue: T;
	value: T;

	readonly name: string;
	readonly description: string;

	readonly type: string;
	readonly placeholder: string;
	readonly props: Record<string, unknown>;

	constructor(key: string, defaultValue: T, name: string, description: string, type: string, placeholder: string, props: Record<string, unknown>) {
		this.key = key;
		this.defaultValue = defaultValue;
		this.value = defaultValue;

		this.name = name;
		this.description = description;

		this.type = type;
		this.placeholder = placeholder || (this.defaultValue + "");
		this.props = props;
	}

	static ofSimple<U>(key: string, defaultValue: U, name: string, description: string, type: string): Option<U> {
		return new Option(key, defaultValue, name, description, type, "", {});
	}
}
