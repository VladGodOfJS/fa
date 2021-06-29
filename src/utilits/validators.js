export const required=(value)=>{
    
    if(value) return undefined
         return "field cannot be blank"
    
}

export const minLength=(value)=>{
    if(value.length <=5 ) return  "min length must be 5 symbols"  
    return undefined;
}