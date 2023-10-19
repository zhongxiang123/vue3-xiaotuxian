// 把components中的组件都进行全局化注册
// 通过插件化的方式

// 变成插件
import ImageView from "./ImageView/index.vue";
import Sku from "./XtxSku/index.vue";
export const componentPlugin = {
    install(app) {
        // app.component('组件名字，组件配置对象)

        app.component('XtxImageView', ImageView)
        app.component("XtxSku", Sku);

    }
}