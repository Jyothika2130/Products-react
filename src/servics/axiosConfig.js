import axios from "axios";

const axiosConfig=async(method,url,reqBody)=>{
let axiosObj={
    method:method,
    url:url,
    data:reqBody
}
return await axios(axiosObj).then((res)=>{
    return res
}).catch((eror)=>{
    return eror
})
}
export default axiosConfig