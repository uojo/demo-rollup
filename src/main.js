// 读取json文件，需要配置文件中引入json插件
import { version } from '../package.json';

export default function () {
	console.log('current version is ' + version);
}