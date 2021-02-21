export const constrast = "constrast"
export const productView = "productView"
export const productRecent = "productRecent"
export const fontSize = "fontSize"

export function armazenarItem(key,item){
    localStorage.setItem(key,JSON.stringify(item));
}

export function recuperarItem(key){
     
   try {
         return  JSON.parse(localStorage.getItem(key));
   } catch (error) { 
       return undefined;
   }
}
 
export function removerItem(key){
    localStorage.removeItem(key);
}

export function existeKey(key){

    if (localStorage.hasOwnProperty(key)) {
        var item  = recuperarItem(key);

        if(typeof(item) === "undefined") removerItem(key);
        return (typeof(item) != "undefined");
    }
    return false;
}
 

