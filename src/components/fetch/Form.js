import { useState, useRef, useEffect} from "react";
import SearchIcon from '@material-ui/icons/Search';

function Form({passQuery}){

    const [query, setQuery]=useState("italy")

    const inputRef = useRef();
        useEffect(()=>{
            inputRef.current.focus();
        },[])
  
    function handleSubmit(e){
        e.preventDefault();
        //use of passQuery in Fetch.js is an examle of data to parent
        passQuery(query);
    }

return(
    <div className="introFetch">

        <form onSubmit={handleSubmit} className="form">
            <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="input rounded" />
            <button className="submitBtn" type="submit">
                <SearchIcon />
            </button>
        </form>
        <br />
        <h4 className="h5 my-1 px-4 ">Merhaba!</h4>
        <p className="px-6 text-left leading-8 font-thin">
            Bu sayfada arama kutucuğuna istediğiniz, tabi fotoğrafı olabilecek ifadeleri yazıp <i>Pixabay </i>
            sitesinden fotoğrafları siteye çekebilirsiniz. Fotoğrafı büyütüp HD kalitesinde bakabilirsiniz.
            Bu sayfanın temel amacı bir WEB API'sini değişen query'e göre tekrar almayı göstermektir.
        </p>
    </div>
)

}

export default Form;