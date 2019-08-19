
const tokenKey = '__wintime_hms_token_key'
// token 生效时间，3天
const tokenTime = 3 * 24 * 60 * 60 * 1000
const markTimeKey = '__set_token_time'
const TokenKey = '';

export function setLocalStorage(token) { 
  localStorage.setItem('TokenKey',token) ;
  localStorage.setItem(markTimeKey, String(+new Date())) 
}
export function getToken(){
  let token = localStorage.getItem('TokenKey');
  if(token) {
    let markTime = localStorage.getItem(markTimeKey)
    let time = +new Date() - +markTime
    if( time > tokenTime) {
        return ''
    }else{
      return token 
    }
  }else{
        return token 
  }
 
}
export function removeToken() { 
   return localStorage.removeItem('TokenKey')
}
