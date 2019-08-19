
import API from '@/api/login'
const umen = {
  state: { 
    userUmen:[],
  },
  mutations: {
    SET_USER_UMEN(state, umens){
        state.userUmen = umens
    }
  },
  actions: {
    router_umen({commit},message){
          API.UserInfo(message).then(res=>{
            let roles = res.data.message;
            console.log('roles',roles)                        
            let allarr = [];
            for(let i in roles){
              let a = roles[i];//每一个菜单数组对象
              let arr = {
                path:'',
                name:'',
                icon:'',
                meta:'',
                children:[],
                component:''
              };
              for(let i in a ){
                if(i==0){                                                           
                arr.path = a[0].servicetarget;
                arr.name = a[0].servicedesc;
                arr.icon = a[0].serviceimage;
                arr.meta = {msg:a[0].servicename};
                arr.children = [];                               
                }
                else{
                   let arrs = {
                     path:'',
                     name:'',
                     icon:'',
                     meta:'',
                     component:'',
                   }
                    arrs.path = a[i].servicetarget;
                    arrs.name = a[i].servicedesc;
                    arrs.icon = a[i].serviceimage;
                    arrs.meta = {msg:a[i].servicename};
                    // arrs.component = require.ensure([], (require) => {
                    //                       resolve(require('@/pages/' + arr.path + arrs.path +'.vue'))
                    //                   })
                    arr.children.push(arrs);
                }
              }
              allarr.push(arr)        
              }
              commit('SET_USER_UMEN','')
              console.log()
              commit('SET_USER_UMEN',allarr)
          })

     
    }
  },

}
export default umen