import React from "react";

export const Input =({input,meta, ...props})=>{
    return(
        <div className= {meta.touched&&meta.error?"form-control error":"form-control"} >
            <input {...input} {...props}/>
            {meta.touched && meta.error?<span className="form-control__error">{meta.error}</span>:" " }
        </div>
    );
 }