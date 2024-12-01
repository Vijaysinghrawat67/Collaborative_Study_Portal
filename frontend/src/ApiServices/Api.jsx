import axios from 'axios';
import { useAuth } from '../authContest/AuthContext.jsx';

const useApi =  () => {
   const {accessToken} = useAuth();
    
    const api = axios.create({
        baseURL : 'http://localhost:2000/api/user',
        headers : {
            "Content-Type" : 'application/json'
        },
    });

    api.interceptors.request.use(
         (config) => {
            if(accessToken){
                ///console.log("access token:", accessToken);
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
    return api;
}


export default useApi;