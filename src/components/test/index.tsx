import React from "react";
import axios from "axios";
const UploadFile = ()=>{
  const change = (files)=>{
    const formData = new FormData(files[0]);
    formData.append('myFile', files[0])
    axios.post('/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  return (
    <input type="file" onChange={(e)=>change(e.target.files)}/>
  )
}