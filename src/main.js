// just install the rollup : npm install --save rollup
// run : npm run build ,这样就需要建立 rollup.config.js 文件

// run : npm run build2 ,调用 rollup.config.js 
import foo from './foo.js';

export default function () {
	console.log(foo);
}