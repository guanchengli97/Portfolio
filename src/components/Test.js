import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Test = ()=>{
    
useEffect(()=>{
    redirectToGoogle();

    setTimeout(function () {
        window.close();
      }, 2000);
},[])

const redirectToGoogle = () => {
    window.location.href = 'https://apps.apple.com/cn/app/lenwell/id1612901719?l=en-GB';
  };

    return (
        <h1>test</h1>
    );
}

export default Test;