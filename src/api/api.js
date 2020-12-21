import Axios from "axios"
import myaxios from "../myaxios/axios"
// 导出接口

export const login = (params) =>{
 return  myaxios.post("admin/login", params).catch(err => console.log(err))
    
}