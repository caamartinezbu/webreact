import React from "react";
import '../css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

   // const  [searchValue, setSearchValue]= React.useState('');

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

return(
    <input 
    className="TodoSearch" 
    placeholder="Cebolla"
    value={searchValue}
    onChange={onSearchValueChange}
    />
);

}

export {TodoSearch};
