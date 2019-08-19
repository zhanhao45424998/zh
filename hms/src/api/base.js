import fetch from '@/utils/fetch';
let usertoken = localStorage.getItem('TokenKey'); 

//基础数据

//医院管理
export default {
    getMsg(data) {
        return fetch({
            url: 'SPD/basicdata/service0110099.do',
            method: 'post',      
            data
        })
    },

}