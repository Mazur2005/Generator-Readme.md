const optionToSelect = () => {
	return [
		////////////////////////////////:TODO: HEADERS
		{
			key: "1-1",
			code: `
# Heading level 1`,
		},
		{
			key: "1-2",
			code: `
## Heading level 2`,
		},
		{
			key: "1-3",
			code: `
### Heading level 3`,
		},
		{
			key: "1-4",
			code: `
#### Heading level 4`,
		},
		{
			key: "1-5",
			code: `
##### Heading level 5`,
		},
		{
			key: "1-6",
			code: `
###### Heading level 6`,
		},

		////////////////////////////////:TODO: LISTS
		{
			key: "2-1",
			code: `			
- First item
- Second item
- Third item
- Fourth item`,
		},
		{
			key: "2-2",
			code: `			
- First item
- Second item
- Third item
	- Indented item
	- Indented item
- Fourth item`,
		},
		{
			key: "2-3",
			code: `
1. First item
2. Second item
3. Third item
4. Fourth item`,
		},
		{
			key: "2-4",
			code: `
1. First item
2. Second item
3. Third item
	1. Indented item
	2. Indented item
4. Fourth item`,
		},

		////////////////////////////////:TODO: Bold and Italic
		{
			key: "3-1",
			code: `
It is **bold text**`,
		},
		{
			key: "3-2",
			code: `
It is *italic text*`,
		},
		{
			key: "3-3",
			code: `
It is ***bold && italic***`,
		},

		////////////////////////////////:TODO: images
		{
			key: "4-1",
			code: `
![There is you description something like alt attribute](https://i.ytimg.com/vi/CUapPhdM7nc/maxresdefault.jpg)`,
		},
		{
			key: "4-2",
			code: `
[![An old rock in the desert](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rcAhD1UPGhl1DPKcaXrCH7mbNt9S-xix9ybm7DFApg&s)](https://www.google.pl)`,
		},

		////////////////////////////////:TODO: links

		{
			key: "5-1",
			code: `
Go to [Duck Duck Go](https://duckduckgo.com)`,
		},
		{
			key: "5-2",
			code: `
Italic Anchor *[Markdown Guide](https://www.markdownguide.org)*`,
		},
		{
			key: "5-3",
			code: `
Anchor with background ${"[`code`]"}(#code)`,
		},
	];
};

export { optionToSelect };
