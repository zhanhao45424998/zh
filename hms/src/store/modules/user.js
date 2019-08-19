import {setLocalStorage} from '@/utils/auth'
import API from '@/api/login'

const user = {
  state: { 
    userId: '',
    userName: '',
  },
  mutations: {
    SET_USER_ID(state, userId){
        state.userId = userId
    },
    SET_USER_ID(state,userName){
        state.userName = userName
    },
  },
  actions: {
    Login({commit}, user) {
        // console.log('user',user)
        let {userName:accountnumber,password} = user;
        return new Promise((resolve, reject) => {
            API.Login({accountnumber,password}).then(res => { 
                console.log('res',res)
                setLocalStorage(res.data.message.token) 
                resolve(res)    
            }).catch(err => {
                reject(err)
                console.log('345',err)
            })
        })
    },
  },
  getters: { 

   }
}
export default user