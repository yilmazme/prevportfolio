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
        <h4 className="h5 my-1 px-4 ">Hola!</h4>
        <p className="px-6 text-left leading-8 font-thin">
            On this page you can see a sample API fetching with a little bit more features.
            You can search any photos on <i>Pixabay's web site </i> by just typing your query and our API call will dynamically change.
            You can take a look at photos with full size and HD quality.
        
        </p>
    </div>
)

}

export default Form;