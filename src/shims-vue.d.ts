declare module '*.vue' {
  import { ComponentOptions } from 'vue'

  const componentOptions: ComponentOptions
  export default componentOptions
}

// declare global {
//   interface Window {
//    	document: any;
//   }
// }