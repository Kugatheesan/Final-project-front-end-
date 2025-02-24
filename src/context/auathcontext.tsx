import React, {  createContext, useContext, useState, ReactNode }  from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

interface User{
    username:string;
    token:string;
    email:string;
}
interface AuthContexType{
    user:User|null;
    register:(username:string,email:string, password:string) => Promise<void>
    signin:(username:string,password:string ) => Promise<void>
    signout:() => Promise<void>
    profile: { username: string }
    getUser: () => Promise<void>
    ForgotPassword: (email: string) => Promise<string>; 
    ResetPassword: (newPassword: string) => Promise<string>; 
}
const AuthContext= createContext<AuthContexType|undefined>(undefined)

export const Authprovider:React.FC<{children:ReactNode }> = ({children})=>{
    const [user ,setUser]=useState<User|null>(null);
    const [ profile, setProfile] = useState({ username: '' });
  const register = async (username:string,email:string,password:string)=>{
   
    if(!username || !password || !email) {
 console.log('fill the fields')
 return;  
    }
      try{
        const response =await axios.post('http://localhost:3000/api/users/register',    {
          username,
          email,
          password,
        })
        console.log("registerUser:", response);
        redirect('/home')
        
      }
      catch(error:any)
      {
        console.log(error.response?.data || error.message);      
      }
  }  

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users/profile", {
        withCredentials: true,
      });

      if (response.data.username) {
        setProfile({ username: response.data.username });
      }
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      setProfile({ username: "" }); // Reset profile on error
    }
  };

  const signin = async (username:string,password:string) => { 
   
    try{
      const response = await axios.post('http://localhost:3000/api/users/login', {
        username,
         password
      }, {
        withCredentials: true
      })
      
      console.log("loginUser:", response)
    }
    catch(error:any){
      console.log(error)
    }
  }

  const signout = async() => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/logout", {}, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setUser(null);
        setProfile({ username: '' })
      }

    } catch (error: any) {
      console.log(error.response?.data || error.message);
      setProfile({ username: "" }); // Reset profile on error
    }

  };

  const ForgotPassword = async (email: string): Promise<string> => {
    try {
      const res = await fetch("http://localhost:3000/api/users/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.text();
      return data;
    } catch (error) {
      return "Error sending reset link.";
    }
  };
  
  
  const ResetPassword = async (newPassword: string): Promise<string> => {
    try {
      const res = await fetch("http://localhost:3000/api/users/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Include cookies for token
        body: JSON.stringify({ newPassword }),
      });
      const data = await res.text();
      return data;
    } catch (error) {
      return "Error resetting password.";
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, signin, signout, getUser, profile ,ForgotPassword, ResetPassword }}>  
    {children}
</AuthContext.Provider>
  );
  };

export const UseAuth =():AuthContexType => {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};







