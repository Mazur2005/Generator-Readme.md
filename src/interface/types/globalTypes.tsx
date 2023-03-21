export interface StringKeyedBooleanObject {
	[key: string]: { [key: string]: boolean };
}
export interface StringKeyedStringObject {
	[key: string]: { [key: string]: string };
}

export interface typePickOption {
	node: { [key: string | number]: string }; /// we work only with node
	originalEvent: any; /// in this object is every style and we don't use this
}
export interface TypeNode {
	children?: { key: string; label: string }[];
	icon?: string;
	key: number | string;
	label?: string;
}
export interface StringKeyedBoolean {
	[key: string]: boolean;
}

