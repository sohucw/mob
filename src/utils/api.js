/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/24.
 */

import axios from 'axios'


//封装好的get和post接口，调用方法情况action文件
export let instance = axios.create({
    // baseURL: BASE_URL, //设置默认api路径
    timeout: 10000, //设置超时时间
    headers: {'X-Custom-Header': 'foobar'}
});

export const getData = (url, param) => {
    return (
        instance.get(`${url}`, {
            params: param
        })
    )
};

export const postData = (url, param) => {
    return (
        instance.post(`${url}`, param)
    )
};


// 相关的获取数据的接口
export const Api = {

    getCiTiao: '../../mock/1.json'

};
