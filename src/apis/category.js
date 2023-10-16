import request from '@/utils/http'

// import { getCategoryAPI } from "./layout";
export function getCategoryAPI(id) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}