import React, {useRef} from 'react';
import './Mail.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import validator from 'validator';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

function Mail() {

    const [valid, setValid] = useState(false)
    const [email, setEmail] = useState("")
    const [open, setOpen] = useState(false)

console.log("mail rendered")


const myText = useRef();
const myName = useRef();
const myMail = useRef();
const myPhone = useRef();


    const validateEmail = (e) => {
       
        var validEmail = e.target.value

        if (validator.isEmail(validEmail)) {
            setValid(true)
            setEmail("")
        } else {
            setValid(false)
            setEmail(e.target.value)
        }
    }

    function sendEmail(e) {
        e.preventDefault();
        if (valid) {
            try {
                emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLETE_ID, e.target, process.env.REACT_APP_USER_ID)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
              
                setTimeout(()=>{
                    alert("Your email delivered successfully!")
                    onClear();
                }, 400)
                
            } catch (error) {
                console.log(error)
                setTimeout(()=>{                  
                    alert("Sorry, we couldn't deliver your mail :(")
                }, 1000)
            }
        }
        else{
            setEmail("enter a valid email")
        }
       
    }
    function onClear(){
        setEmail("")
        myText.current.value ="";
        myName.current.value ="";
        myMail.current.value ="";
        myPhone.current.value ="";
    }
   

    return (
        <div className={open===true? "mailMainToOpen" : "mailMainToClose"} >
            <div className="screen">
                <div className="screen-header">
                    <div className="screen-header-left">
                        <div className="screen-header-button close"></div>
                        <div className="screen-header-button maximize"></div>
                        <div className="screen-header-button minimize"></div>
                    </div>
                    <div className="screen-header-center text-center">
                        <h3 className="text-center text-info">{open===true? "Nah, maybe later" : "Text to me"}</h3>
                    </div>
                    <div className="screen-header-right" onClick={()=>setOpen(!open)}>
                    {open===true? <ArrowDropDownIcon className="text-danger fs-2"/> : <ArrowDropUpIcon className="text-success fs-2"/>}
                    </div>
                </div>
                <div className="screen-body">
                    <div className="screen-body-item">
                        <form className="app-form" onSubmit={sendEmail}>
                            <div className="app-form-group message">
                                <textarea ref={myText} className="p-2" name="message" placeholder="MESSAGE" rows="8" cols="24" required autoComplete="false" maxLength="500"/>
                            </div>
                            <div className="app-form-group">
                                <input ref={myName} className="app-form-control p-2" placeholder="NAME" type="text" name="user_name" required autoComplete="false" maxLength="20"/>
                            </div>
                            <div className="app-form-group">
                                <input ref={myMail} className="app-form-control p-2" placeholder="EMAIL" type="email" name="user_email" onChange={(e) => validateEmail(e)} maxLength="30"/>
                               {email && <p className="text-danger">Please enter a valid email !</p>}
                            </div>
                            <div className="app-form-group">
                                <input ref={myPhone} className="app-form-control p-2" placeholder="CONTACT NO" type="text" name="user_phone" required autoComplete="false" maxLength="20"/>
                            </div>                         
                            <div className="app-form-group buttons">
                                <button className="app-form-button text-warning btn btn-outline-warning" onClick={onClear}>CLEAR</button>
                                <button className="app-form-button text-success btn btn-outline-success" type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default React.memo(Mail);