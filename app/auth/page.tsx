'use client';
import axios from "axios";
import Input from "@/components/input";
import { register } from "module";
import { useCallback, useState } from "react";

import{signIn} from 'next-auth/react';
import { useRouter } from "next/router";


const Auth = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVarient] = useState('login');
    const toggleVariant = useCallback(()=>{
setVarient((currentVariant)=> currentVariant == 'login' ? 'register' : 'login');
    }, [] );

    const login = useCallback( async ()=>{
        try{
            await signIn ('credentials', {
           email,
           password,
           redirect:false,
           callbackUrl:'/'
        });
        router.push('/');
      
       } catch(error){
           console.log(error);
       }
    },[email, password,router])
    
const register = useCallback(async()=>{
    try{
         await axios.post ('/api/register', {
        email,
        name,
        password
    });
login();
    } catch(error){
        console.log(error);
    }

}, [email, name, password,login]);



    return (
<div className="relative h-full w-full bg-[url('/images/hero.jpg')]" bg-no-repeat bg-cover bg-center bg-fixed>
    <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
            <img src="/images/logo.png" alt="logo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
<div>
    <h2 className="text-white text-4xl mb-8 font-semibold">
        {variant === 'login' ? 'Sign in' : 'Register'}
        </h2>
    <div className="flex flex-col gap-4"> 
   {variant== 'register' &&(
    <Input
        label="username"
        onChange={(ev:any) => setName(ev.target.value)}
        id="name"
        type="name"
        value={name}
        />
    )}
        <Input
        label="Email"
        onChange={(ev:any) => setEmail(ev.target.value)}
        id="email"
        type="email"
        value={email}
        />
        <Input
        label="Password"
        onChange={(ev:any) => setPassword(ev.target.value)}
        id="password"
        type="password"
        value={password}
        />
            </div>
        </div>
    <button onClick={variant=='login' ? login : register} className="bg-red-600 py-3 text-white rouneded-md w-full mt-10 hover:bg-red-700 transition">{ variant == 'login' ? 'login' : 'signup' }</button>
    <p className="text-neutral-500 mt-12">
     {variant == 'login' ? 'First time using Netflix ?':'Already have an account ?'} 
     <span onClick={toggleVariant}
     className="text-white ml-1 hover:underline cursor-pointer">{variant == 'login' ? 'Create account':'login '}</span>
                    </p>
            </div>
        </div> 
    </div>
</div>
    );
}
export default Auth ;