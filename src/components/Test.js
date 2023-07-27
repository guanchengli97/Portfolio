import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Test = ()=>{
    
useEffect(()=>{
    redirectToGoogle();
},[])

const redirectToGoogle = () => {
    window.location.href = 'https://www.google.com';
  };

    return (
        <h1>test</h1>
    );
}

export default Test;