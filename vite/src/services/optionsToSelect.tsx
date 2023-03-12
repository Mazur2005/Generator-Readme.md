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
		{
			key: "2-5",
			code: `
- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley`,
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
[![There is you description something like alt attribute](https://sweezy-cursors.com/wp-content/uploads/cursor/pusheen-the-cat-animated/pusheen-the-cat-animated-custom-cursor.gif)](https://www.google.pl)`,
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

		////////////////////////////////:TODO: strikethrough
		{
			key: "6-1",
			code: `~~This text is strikethrough~~`,
		},

		////////////////////////////////:TODO: blockquotes
		{
			key: "7-1",
			code: `
> Lorem ipsum dolor sit amet,
> Vestibulum enim wisi, viverra.
> 
> Donec sit amet nisl.`,
		},
		{
			key: "7-2",
			code: `
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.`,
		},

		////////////////////////////////:TODO: blockquotes

		{
			key: "8-1",
			code: `
| Left | Center | Right |
|:-----|:------:|------:|
|aaa   |bbb     |ccc    |
|ddd   |eee     |fff    |
`,
		},
		{
			key: "8-2",
			code: `

A | B 
---|---
123|456
`,
		},

		////////////////////////////////:TODO: code

		{
			key: "9-1",
			code: `${"\n\n```git run dev ```"}`,
		},
		{
			key: "9-2",
			code: `${"\n``` react\nconst Translated = ({ code, getTheme }: Props) => {\nreturn (\n<markdown-style theme={`${getTheme}`}>\n<ReactMarkdown\nremarkPlugins={[remarkGfm]}\nclassName={`box--textarea__translate`}\nchildren={code}\ncomponents={{ code: Component }}\n/>\n</markdown-style>\n);\n}\n```"}`,
		},
	];
};

export { optionToSelect };
