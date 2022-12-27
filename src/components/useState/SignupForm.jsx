import React , {useState} from "react";
import './form.css';

const SignupForm = () => {

        const [formData, setFormData] = useState({
          name: "",
          email: "",
          date:""
         
        });
      
        const handleInput = (event) => {
            const name = event.target.name;
            const value = event.target.value;
        
            setFormData((prev) => {
              return { ...prev, [name]: value };
            });
          };

    return(
        <>
            <div className="top">
                <h1>Fill The information Below to Signup</h1>
                <form>
                    <label>Name*</label> &nbsp;
                    <input type='text' name="name" value={formData.name} onChange={handleInput} />
                    &nbsp;
                    <label>Email*</label> &nbsp;
                    <input type='email' name="email" value={formData.email} onChange={handleInput} /> &nbsp;
                    <label>Date of Birth</label>
                    <input type='date' name='date' value={formData.date} onChange={handleInput} />
                    <button>Register</button>
                </form>
            </div>

            <p>{`My name is ${formData.name} and my date of birht is ${formData.date}`}</p>
        </>
    )
}

export default SignupForm;