import React, { Children, createContext, useState }  from "react";
import axios from "axios";

interface User{
    username:string;
    token:string;
    email:string;
}
interface AuthContexType{
    user:User|null;
    lodaing:Boolean;
    register:(username:string,password:string,email:string ) => Promise<void>
    login:(username:string,password:string ) => Promise<void>
    logout:() => Promise<void>
}
const AuthContext= createContext<AuthContexType|undefined>(undefined)

export Authprovider:React.FC<{childern:reactNote }=> ({children})=>{
    const [user ,setUser]=useState<User|null>(null);


  const register = async (username:string,email:string,password:string)=>{
      try{
        const response=await axios.post('http://localhost:3000/api/register')
      }
      catch(error:any)
      {
        console.log(error)
      }
  }  

}


export default UseAuth


