interface Type {
	getTreeNodesData: () => void;
	getTreeNodes: () => Promise<any>;
}
export const productService: Type = {
	getTreeNodesData() {
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
					{
						key: "5-3",
						label: "Anchor with background",
					},
				],
			},
			{
				key: 6,
				label: "Strikethrough",
				children: [
					{
						key: "6-1",
						label: "This text is strikethrough",
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
						label: "zdj tabeli 3 kolumnowej",
					},
					{
						key: "8-2",
						label: "zdj tabeli 2 kolumnowej",
					},
				],
			},
			{
				key: 9,
				label: "code",
				children: [
					{
						key: "9-1",
						label: "zdj git clone",
					},
					{
						key: "9-2",
						label: "zdj js clone",
					},
				],
			},
		];
	},

	getTreeNodes() {
		return Promise.resolve(this.getTreeNodesData());
	},
};
