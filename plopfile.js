const config = plop => {
	plop.setGenerator("component", {
		description: "Generate a component",
		prompts: [
			{
				type: "input",
				name: "component",
				message: "Component name:"
			},
			{
				type: "input",
				name: "element",
				message: "Expected element type i.e 'div', 'button', etc:"
			},
		],
		actions: [
			{
				type: "add",
				path: "src/components/{{pascalCase component}}/{{pascalCase component}}.component.tsx",
				templateFile: "templates/component.hbs"
			},
			{
				type: "add",
				path: "src/components/{{pascalCase component}}/{{pascalCase component}}.styles.ts",
				templateFile: "templates/styles.hbs"
			},
			{
				type: "add",
				path: "src/components/{{pascalCase component}}/{{pascalCase component}}.types.ts",
				templateFile: "templates/types.hbs"
			},
			{
				type: "add",
				path: "src/components/{{pascalCase component}}/{{pascalCase component}}.index.ts",
				templateFile: "templates/index.hbs"
			}
		]
	})
}

module.exports = config;