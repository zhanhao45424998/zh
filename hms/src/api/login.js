import fetch from '@/utils/fetch';

export default {
    Login(data) {
        return fetch({
            url: 'SPD/basicdata/getUserToken.do',
            method: 'post',      
            data
        })
    },
    UserInfo(data) {
        return fetch({
            url: 'SPD/basicdata/getUserService.do',
            method: 'post', 
            data
        })
    },

}



// export function exportExcel(url,fileName) {
//     return new Promise(() => {
//         fetch({
//             url: url,
//             method: 'get',
//             responseType: 'blob',
//             contentType: 'application/octet-stream',
//         }).then(res => {
//             let url = window.URL.createObjectURL(res);
//             let a = document.createElement('a');
//             a.href = url;
//             a.download = `${fileName}`;
//             a.click();
//             //资源释放
//             window.URL.revokeObjectURL(url);
//         }).catch(err => {
//             console.log(err)
//         })
//     })
// }
