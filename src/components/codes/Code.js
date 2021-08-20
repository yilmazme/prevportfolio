import { useState} from 'react';
import { Dropdown,DropdownButton, ButtonGroup} from 'react-bootstrap';
import "./Code.css";
import Jscript from './langs/Jscript';
import Csharp from "./langs/Csharp";
import General from './General';


export default function Code(){

    const [page, setPage] = useState(-1)

    return(
        <div className="codeMain">
            <div className="buttonGroup">
            
                    <DropdownButton
                        as={ButtonGroup}                        
                        id={`dropdown-button-drop-end`}
                        drop="end"
                        variant="success"
                        title="Languages"
                        className="my-3"
                    >
                        <Dropdown.Item eventKey="1" onClick={()=>setPage(0)}>JavaScript</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={()=>setPage(1)}>C#</Dropdown.Item>
                        <Dropdown.Item eventKey="3" onClick={()=>setPage(-1)}>Python</Dropdown.Item>
                        <hr></hr>
                        <Dropdown.Item eventKey="4" onClick={()=>setPage(-1)}>HTML</Dropdown.Item>
                        <Dropdown.Item eventKey="5" onClick={()=>setPage(-1)}>CSS</Dropdown.Item>
                        
                    </DropdownButton>
                    <DropdownButton
                        as={ButtonGroup}                        
                        id={`dropdown-button-drop-end`}
                        drop="end"
                        variant="warning"
                        title="Frameworks"
                        className="my-3"
                    >
                        <Dropdown.Item eventKey="6" onClick={()=>setPage(-1)}>React</Dropdown.Item>
                        <Dropdown.Item eventKey="7" onClick={()=>setPage(-1)}>Angular</Dropdown.Item>
                        <Dropdown.Item eventKey="8" onClick={()=>setPage(-1)}>Vue</Dropdown.Item>
                        <Dropdown.Item eventKey="9" onClick={()=>setPage(-1)}>Blazor</Dropdown.Item>
                        <Dropdown.Item eventKey="10" onClick={()=>setPage(-1)}>Flask</Dropdown.Item>
                     
                    </DropdownButton>
             
            </div>
            <div className="codeArea">
               {page===-1 && <General/>}
               {page===0 && <Jscript/>}
               {page===1 && <Csharp/>}
            </div>
        </div>
    )
}

