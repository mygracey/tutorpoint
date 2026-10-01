

import {useState} from "react";

function Contact(){
     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ef4608af-096a-4526-bc7c-a14f2df46d4d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    setTimeout(() => {
        event.target.reset()
    },2000);
  };

    return(
       <div className="contactpage">
        <h2>Contact Us</h2>
        <p>Send your enquiries,complaints or suggestions to us by mail, and we will get back to you within 24 hours!</p>

        <form onSubmit={onSubmit}>
            <input type="text" name="name" autoComplete="off" placeholder="Your name" /><br />
            <input type="text" name="email" autoComplete="off" placeholder="Your email" /><br />
            <input type="number" name="mobile" autoComplete="off" placeholder="Your mobile number"/><br />
            <textarea name="message" placeholder="Leave a message here..."></textarea>

            <button type="submit" name="submit">Send my message</button>
            <p>{result}</p>
        </form>

        
       </div> 
       
    )

}

export default Contact