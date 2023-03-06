import { url } from "inspector";

interface Type {
	getTreeNodesData: () => void;
	getTreeNodes: () => Promise<void>;
}
export const ProductService: Type = {
	getTreeNodesData() {
		return [
			{
				key: 1,
				label: "Headers",
				icon: "pi pi-globe",
				children: [
					{
						key: "0-0",
						label: `HEADER`,
					},
					{
						key: "0-1",
						label: `HEADER`,
					},
					{
						key: "0-2",
						label: `HEADER`,
					},
					{
						key: "0-3",
						label: `HEADER`,
					},
					{
						key: "0-4",
						label: `HEADER`,
					},
					{
						key: "0-5",
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
						key: "1-0",
						label: "Dotted lst",
					},
					{
						key: "1-1",
						label: "Dotted in dotted list",
					},
					{
						key: "1-2",
						label: "Ordered list",
					},
					{
						key: "1-3",
						label: "Ordered in ordered list",
					},
				],
			},
			{
				key: 3,
				label: "Bold and Italic",
				icon: "pi pi-star-fill",
				children: [
					{
						key: "2-0",
						label: "Classical bold",
					},
					{
						key: "2-1",
						label: "Italic",
					},
					{
						key: "2-2",
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
						key: "3-0",
						label: "Images with out description",
					},
					{
						key: "3-0",
						label: "Images with description",
					},
				],
			},
			{
				key: 5,
				label: "Links",
				icon: "pi pi-link",
				children: [
					{
						key: "3-0",
						label: "Classical anchor",
					},
					{
						key: "3-0",
						label: "Italic anchor",
					},
					{
						key: "3-0",
						label: "Anchor with background",
					},
				],
			},
		];
	},

	getTreeNodes() {
		return Promise.resolve(this.getTreeNodesData());
	},
};
