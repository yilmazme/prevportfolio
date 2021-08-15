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
            emailjs.sendForm('service_cq378e8', 'template_7mqap21', e.target, 'user_PYNOd7gIkSXASF5nilh6m')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                setEmail('')
        }
        else{
            setEmail("enter a valid email")
        }
       
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
                            <div className="app-form-group">
                                <input className="app-form-control p-2" placeholder="NAME" type="text" name="user_name" required autoComplete="false" />
                            </div>
                            <div className="app-form-group">
                                <input className="app-form-control p-2" placeholder="EMAIL" type="email" name="user_email" onChange={(e) => validateEmail(e)} />
                               {email && <p className="text-danger">Please enter a valid email !</p>}
                            </div>
                            <div className="app-form-group">
                                <input className="app-form-control p-2" placeholder="CONTACT NO" type="text" name="user_phone" required autoComplete="false" />
                            </div>
                            <div className="app-form-group message">
                                <textarea className="p-2 bg-blue-100" name="message" placeholder="MESSAGE" rows="6" cols="24" required autoComplete="false" />
                            </div>
                            <div className="app-form-group buttons">
                                <button className="app-form-button m-1 text-warning" type="reset" onClick={()=>setEmail("")}>CANCEL</button>
                                <button className="app-form-button m-1 text-success" type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Mail;