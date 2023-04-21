import React from "react";

function Contact() {
    return(
        <form className="w-50">
        <div className="form-group">
    <label for="nameInput">Name</label>
    <input type="text" className="form-control" id="nameInput" placeholder="Name"></input>
  </div>
  <div className="form-group">
    <label for="emailInput">Email address</label>
    <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="messageInput">Message</label>
    <input type="text" class="form-control" id="messageInput" placeholder="Message"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    )
}

export default Contact