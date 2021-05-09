import axios from 'axios';

export const listaction = (payload) => async (dispatch) => {

try {
 let resp= await  axios.get('/clientdata');  
 dispatch({
    type: "USER_List",
    data: resp.data,
}); 
} catch (e) {
    console.log("error");
}


}



export const Addclient = (payload) => async (dispatch) => {

    try {
     let resp= await  axios.post('/client',payload);  
     dispatch({
        type: "USER_List",
        data: resp.data,
    }); 
    } catch (e) {
        console.log("error");
    }
    
    
    }

    export const DeleteClient = (payload) => async (dispatch) => {

        try {
         let resp= await  axios.post('/deleteclient',payload);  
         dispatch({
            type: "USER_List",
            data: resp.data,
        }); 
        } catch (e) {
            console.log("error");
        }
        
        
        }


        export const UpdateClient = (payload) => async (dispatch) => {

            try {
             let resp= await  axios.post('/updateclient',payload);  
             dispatch({
                type: "USER_List",
                data: resp.data,
            }); 
            } catch (e) {
                console.log("error");
            }
            
            
            }
    
