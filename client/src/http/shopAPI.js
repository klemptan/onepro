import { Good } from "../models/Good";
import {$host} from "./index";

export const createCategory = async (category)=>{
    const {data} = await $host.post('api/category',category)
    return data
}

export const fetchCategories = async ()=>{
    const {data} = await $host.get('api/category')
    return data
}

export const fetchOneCategory = async (id)=>{
    const {data} = await $host.get('api/category/'+id)
    return data
}

export const fetchBrandWitGoods = async(id)=>{
    const {data} = await $host.get('api/brand/'+id)
    return data
}

export const fetchGoods = async (categoryId)=>{
    const {data} = await $host.get('api/good?categoryId='+(categoryId||0))
    return data
}

export const fetchOneGood = async (id)=>{
    const {data} = await $host.get('api/good/'+id)
    return new Good(data)
}


export const fetchSlider = async(id)=>{
    const {data} = await $host.get('api/slider/'+id)
    return data
}

export const fetchBrands = async ()=>{
    const {data} = await $host.get('api/brand/')
    return data
}
