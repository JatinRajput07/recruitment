import axios from "axios";
import moment from "moment";
import { get, post } from '../helpers/apiHelper'

export const getCurrentUser = async() => {
   
}

export const getCategories = async() => {
    try {
        let categories = await get('/api/all_categories?type=1');
        return categories
        
    } catch (err) {
        console.log(err)
    }
}

export const previewImage = (file) =>{
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
   return url
}

export const getLocalUser = () =>{
     return JSON.parse(sessionStorage.getItem('user'))    
}

export const uploadImage = async(file) =>{

    try {
        let fd = new FormData();
        if(Array.isArray(file)) {
            file.forEach((f =>{
                fd.append('image', f)
            }))
        }else{

            fd.append('image', file)        
        }
        let res =  await post('api/imageUpload',fd);
        return res
        
    } catch (err) {
        console.log(err.messsage)
    }

}

export const formatDate = (date) =>{
    return moment(date).format("DD MMMM YYYY, h:mm a")
}

