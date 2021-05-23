import request from '../utils/request'

export function userLogin(kvs: any){
    return request({
        method: 'post',
        url: '/api/userLogin',
        data: kvs
    })
}
