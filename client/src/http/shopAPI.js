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

export const fetchGoods = async ()=>{
    const {data} = await $host.get('api/good')
    return data
}

export const fetchOneGood = async (id)=>{
    const {data} = await $host.get('api/good/'+id)
    return data
}


export const fetchSlider = async(id)=>{
    const {data} = await $host.get('api/slider/'+id)
    console.log(data)
    return data
}
