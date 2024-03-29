interface TypeChildren {
	key: string;
	label: string;
}

interface Type {
	key: number;
	label: string;
	icon?: string;
	children: TypeChildren[];
}

export const getTreeNodesData = (): Type[] => {
	return [
		{
			key: 1,
			label: "Headers",
			icon: "pi pi-globe",
			children: [
				{
					key: "1-1",
					label: `HEADER`,
				},
				{
					key: "1-2",
					label: `HEADER`,
				},
				{
					key: "1-3",
					label: `HEADER`,
				},
				{
					key: "1-4",
					label: `HEADER`,
				},
				{
					key: "1-5",
					label: `HEADER`,
				},
				{
					key: "1-6",
					label: `HEADER`,
				},
			],
		},
		{
			key: 2,
			label: "Lists",
			icon: "pi pi-list",
			children: [
				{
					key: "2-1",
					label: "Dotted list",
				},
				{
					key: "2-2",
					label: "Dotted in dotted list",
				},
				{
					key: "2-3",
					label: "Ordered list",
				},
				{
					key: "2-4",
					label: "Ordered in ordered list",
				},
				{
					key: "2-5",
					label: "Check list",
				},
			],
		},
		{
			key: 3,
			label: "Bold and Italic",
			icon: "pi pi-star-fill",
			children: [
				{
					key: "3-1",
					label: "Classical bold",
				},
				{
					key: "3-2",
					label: "Italic",
				},
				{
					key: "3-3",
					label: "Bold and Italic",
				},
			],
		},
		{
			key: 4,
			label: "Images",
			icon: "pi pi-image",
			children: [
				{
					key: "4-1",
					label: "Images",
				},
				{
					key: "4-2",
					label: "Linking Images",
				},
			],
		},
		{
			key: 5,
			label: "Links",
			icon: "pi pi-link",
			children: [
				{
					key: "5-1",
					label: "Classical anchor",
				},
				{
					key: "5-2",
					label: "Italic anchor",
				},
			],
		},
		{
			key: 6,
			label: "Strikethrough",
			children: [
				{
					key: "6-1",
					label: "Strikethrough",
				},
			],
		},
		{
			key: 7,
			label: "Blockquotes",
			children: [
				{
					key: "7-1",
					label: "Classic blockquotes",
				},
				{
					key: "7-2",
					label: "Blockquote in a blockquote",
				},
			],
		},
		{
			key: 8,
			label: "Table",
			children: [
				{
					key: "8-1",
					label: "Two rows table",
				},
				{
					key: "8-2",
					label: "Three rows table",
				},
			],
		},
		{
			key: 9,
			label: "code",
			children: [
				{
					key: "9-1",
					label: "Git code",
				},
				{
					key: "9-2",
					label: "React code",
				},
			],
		},
	];
};