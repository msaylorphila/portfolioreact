import React, {useState} from "react";

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errMessage, setErrMessage] = useState("")
  

    const validateInputs = (event) => {
        event.preventDefault()
        console.log("validating inputs")
        if(message.length < 20){
            setErrMessage("Please enter a message longer than 20 characters")
            return
        } else if (!name.length || !email.length) {
          setErrMessage("Please fill out all fields")
          return
        }
        setErrMessage("")
        setErrMessage("Your message was sent!")
        setName('')
        setEmail('')
        setMessage('')
    };

    return(
        <form onSubmit={validateInputs} className="w-50 contact-form">
        <div className="form-group">
    <label htmlFor="nameInput">Name</label>
    <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="emailInput">Email address</label>
    <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="messageInput">Message</label>
    <input type="text" className="form-control" value={message} onChange={e=>setMessage(e.target.value)}  id="messageInput" placeholder="Message"></input>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
  <p>{errMessage}</p>
</form>
    )
}
Contact.displayName = 'Contact'
export default Contact