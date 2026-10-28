import AxiosConfig from "./AxiosConfig"
import { BASEURL } from "./BaseURL"

export const addResume = async(reqBody)=>{
   return await AxiosConfig('post',`${BASEURL}/resumeDatas`,reqBody)
}

export const getResumes = async()=>{
    return await AxiosConfig('get',`${BASEURL}/resumeDatas`,'')
}

export const deleteResume = async(id)=>{
    return await AxiosConfig('delete',`${BASEURL}/resumeDatas/${id}`,'')
}

export const getSingleResume = async(id)=>{
    return await AxiosConfig('get',`${BASEURL}/resumeDatas/${id}`,'')
}

export const updateResume = async(id,reqBody)=>{
    return await AxiosConfig('put',`${BASEURL}/resumeDatas/${id}`,reqBody)
}