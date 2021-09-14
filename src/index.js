// 这里import 的 btn和btnDemo.vue的name属性名相同 ！
import btn from './btnDemo.vue'
// 给组件配置install方法 
btn.install = Vue => Vue.component(btn.name, btn)

export default btn;

// // 01-webpack5-start\src\index.js
// import { sum, square } from './utils.js'; // 因为要直接在浏览器中执行，浏览器是不能识别不带js后缀的js文件的，所以要带上js
// console.log(sum(2, 5));
// console.log(square(6));