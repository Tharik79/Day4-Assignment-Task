const getflags = () => {
    
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET",  "https://restcountries.com/v3/all");
    
    xhr.responseType = "json";

    xhr.onload = () => {
        
        const flags = xhr.response;
       
       for (let flag of flags){
           console.log(flag.name);
           console.log(flag.region);
           console.log(flag.subregion);
           console.log(flag.languages);
           console.log(flag.capital);
           console.log(flag.population);

       }
       
    };
    
    xhr.send();
 
};
getflags();