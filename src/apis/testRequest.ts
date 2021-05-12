import request from '../utils/request'

export function testApi(){
    return request({
        method: 'get',
        url: '/api/user'
    })
}