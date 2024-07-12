import NavbarItem from "./NavbarItem";
import {BsChevronDown, BsSearch, BsBell} from 'react-icons/bs';
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import { useCallback, useEffect, useState } from "react";
const TOP_OFFSET =66;
const Navbar=()=>{
const[ShowMobileMenu, setShowMobileMenu]=useState(false);
const[ShowAccountMenu, setShowAccountMenu]=useState(false);
const[ShowBackground, SetShowBackground]=useState(false);
useEffect(()=> {
    const handleScroll=()=>{
        if(window.scrollY >= TOP_OFFSET ){
            SetShowBackground(true);
        }
        else    {
            SetShowBackground(false);
        }
        
    }
    window.addEventListener('scroll',handleScroll);
    return()=>{
        window.removeEventListener('scroll',handleScroll);
    }
},[])
const togglMobileMenu = useCallback(()=>{
    setShowMobileMenu((current)=>!current);
},[]);
    const togglAccountMenu = useCallback(()=>{
        setShowAccountMenu((current)=>!current);    

},[]);
return(

    <nav className="w-full fixed z-40">
<div className={`
px-4
md:px-16
py-6
flex
flex-row
items-center
transition 
duration-500

${ShowBackground ? 'bg-zink-900 bg-opacity-90': ''}
`}>
<img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
<div

className="
flex-row
ml-8
gap-7
hidden
lg:flex
"
>
<NavbarItem label = 'Home' />
<NavbarItem label = 'Series' />
<NavbarItem label = 'Films' />
<NavbarItem label = 'New & Popular' />
<NavbarItem label = 'My List' />
<NavbarItem label = 'Browse by languages' />

</div>
<div onClick={togglMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
<p className="text-white text-sm">Browse</p>
<BsChevronDown className={`text-white transition ${ShowMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
<MobileMenu visible={ShowMobileMenu} />
</div>
<div className="flex flex-row ml-auto gap-7 items-center">
    <div className="text-gray-200 hover:text-gray-300 cursor-pointer ">
        <BsSearch/> 
    </div>
    <div className="text-gray-200 hover:text-gray-300 cursor-pointer ">
        <BsBell/> 
    </div>

    <div onClick={togglAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative" >
        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
        <img src="/images/yellow_user.jpg" alt="user" />
        </div>
        <BsChevronDown className={`text-white transition ${ShowAccountMenu ? 'rotate-180' : 'rotate-0'}`} />

<AccountMenu visible={ShowAccountMenu} />

    </div>
</div>
</div>
</nav>



)

}

export default Navbar;