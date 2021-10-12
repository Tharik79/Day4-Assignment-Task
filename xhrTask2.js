const getflags = () => {
    
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET",  "https://restcountries.com/v3/all");
    
    xhr.responseType = "json";

    xhr.onload = () => {
        
        const flags = xhr.response;
       
       for (let flag of flags){
           console.log(flag.flags);
       }
       
    };
    
    xhr.send();
 
};
getflags();