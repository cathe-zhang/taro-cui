module.exports = {
	description: '组件模版', // 这里是对该plop的功能描述
	// 问题询问
	prompts: [
		{
			type: 'input', // 问题类型 此处为输入
			name: 'FILE_NAME', // actions 和 hbs 模板文件中可使用该变量
			message: '请输入组件名称', // 问题
			default: 'testComp', // 问题的默认答案
		},
		{
			type: 'input', // 问题类型 此处为输入
			name: 'FILE_DESC', // actions 和 hbs 模板文件中可使用该变量
			message: '请输入组件描述', // 问题
			default: '这是一个测试组件', // 问题的默认答案
		},
	],
	// 操作行为
	actions: function (data) {
    let actions = []

		actions = actions.concat([
			{
				type: 'add', // 操作类型，这里是添加文件
				path:
					'../src/pages/{{camelCase FILE_NAME}}/index.tsx', // 添加的文件的路径
				templateFile: './component/component.hbs', // 模板文件的路径
      },
      {
				type: 'add', // 操作类型，这里是添加文件
				path:
					'../src/pages/{{camelCase FILE_NAME}}/index.config.ts', // 添加的文件的路径
				templateFile: './component/config.hbs', // 模板文件的路径
			},
			{
				type: 'add', // 操作类型，这里是添加文件
				path:
					'../src/pages/{{camelCase FILE_NAME}}/index.scss', // 添加的文件的路径
				templateFile: './component/scss.hbs', // 模板文件的路径
			},
		])

		return actions
	},
}
