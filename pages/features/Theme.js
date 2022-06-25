import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextColor } from "./themeSlice";

const Theme = () => {
  const dispatch = useDispatch();

  const color = useSelector((state)=>state.theme.color)
  const chngTheme=()=>{
    if(color==='')
    {
      dispatch(changeTextColor({color:"red",secondaryColor:"blue"}))
    }
    else if(color==="red")  
    {dispatch(changeTextColor({color:"",secondaryColor:"rgb(62, 62, 255)"}))}
  }
  return (
    <div>

      <button
        onClick={chngTheme}
      >
        Change Text Colour
      </button>
    </div>
  );
};

export default Theme;