export interface typeStateDragDown {
	[key: string]: { [key: string]: boolean };
}
export interface typeIsDesktop {
	[key: string]: { [key: string]: boolean };
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
export interface TypeExpandedKeys {
	[key: string]: boolean;
}

export interface typeOrderEditor {
	[key: string]: { [key: string]: boolean };
}
export interface typeSketch {
	[key: string]: { [key: string]: string };
}
