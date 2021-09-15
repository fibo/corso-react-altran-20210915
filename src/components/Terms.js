import React,{useEffect}  from "react";


export function  Terms(){
    useEffect(()=>{
        console.log('mounted')

        return ()=>{
            console.log('unmounted')
        }
    },[])

    return <p>Terms</p>

}