import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from '../utils/auth'
// 路由数据
import routes from "./routers";

Vue.use(VueRouter);

// 导出路由 在 main.js 里使用
const router = new VueRouter({
    
    routes
});

// /**
//  * 路由拦截
//  * 权限验证
//  */
// router.beforeEach((to, from, next) => {
//     next();
// });

// router.afterEach(to => {
//     // 需要的信息
//     const app = router.app;
//     const {name, params, query} = to;
//     //  多页控制 打开新的页面
//     //app.$store.commit('d2admin/page/open', { name, params, query })
//     // 更改标题
//     //util.title(to.meta.title)
// });
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
      next();
    } else {
      let token = String(getToken());
      if (token === 'null' || token === '') {
          console.log()
        next('/login');
      } else {
        next();
        
      }
    }
  });
export default router;
