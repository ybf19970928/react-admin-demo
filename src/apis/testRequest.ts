import request from '../utils/request'

export function testApi(){
    return request({
        method: 'get',
        url: '/api/user'
    })
}

export function testList() {
    return request({
        method: 'get',
        url: '/getlist'
    })
}