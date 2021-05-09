import request from '../utils/request'

export function testApi(){
    return request({
        method: 'GET',
        url: '/api/user'
    })
}