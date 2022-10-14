import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";


const CreateUser = () => {
    const dispatch = useDispatch ();
    const navigate = useNavigate ();
    const [form, setForm] = useState ({
        name: "", 
        surname: "",
        email: "",
        password: "",
        telephoneNumber: "",
        storeName: "",
        profilePicture: "",
    });

const [errors, setErrors] = useState ({});

const validate = (input) => {
    let errors ={};

    if (!input.name.length) errors.name = "Name required";
    if (!input.surname.length) errors.surname = "Surname required";
    if (!input.email.length) errors.email = "E-mail required";
    if (!input.storeName.length) errors.storeName = "Store_name required";
    if (!input.password.length) errors.password = "password required";
    if (!input.telephoneNumber.length) errors.telephoneNumber = "Telephone_number required";
    
    return errors;
};
const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(createUser(form));
     alert("User created!");
     navigate("/");
  };

const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
        validate({
          ...form,
          [e.target.name]: e.target.value,
        })
      );
};

return (
    <div>
        <h1>Register User</h1>
      {/* formulario */}
     <form onSubmit={(e) => handleSubmit(e)}>
      {/* input nombre */}
      <input
       type="text"
       placeholder="Name"
       name="name"
       value={form.name}
       onChange={handleChange}
       required
       autoComplete="off"
      
      />
       {errors.name && <p>{errors.name}</p>}

      {/* input surname */}
      <input
       type="text"
       placeholder="Surname"
       name="Surname"
       value={form.surname}
       onChange={handleChange}
       required
       autoComplete="off"
      
      />
       {errors.surname && <p >{errors.surname}</p>}

      {/* inpunt email */}
      <input
       type="text"
       placeholder="Email"
       name="Email"
       value={form.email}
       onChange={handleChange}
       required
       autoComplete="off"
      
      />
       {errors.email && <p >{errors.email}</p>}

      {/* inpunt password */}
      <input
       type="password"
       placeholder="password"
       name="password"
       value={form.password}
       onChange={handleChange}
       required
       autoComplete="off"
      
      />
       {errors.password && <p >{errors.password}</p>}

      {/* input telephone_number */}
      <h4 >telephone_number</h4>
          <input
            type="number"
            placeholder="telephone Number"
            name="telephone Number"
            value={form.telephoneNumber}
            onChange={handleChange}
            required
          />
           {errors.telephoneNumber && <p >{errors.telephoneNumber}</p>}


         {/* input profilePicture */}
         <input
            type="text"
            placeholder="URL image"
            name="profile picture"
            value={form.profilePicture}
            onChange={handleChange}
            required
            autoComplete="off"
            
          />

            {/* input storeName */}
         <input
            type="text"
            placeholder="Store Name"
            name="Store Name"
            value={form.storeName}
            onChange={handleChange}
            required
            autoComplete="off"
            
          />
         {errors.storeName && <p >{errors.storeName}</p>}
         <button>Send</button>
     </form>


    </div>
)


}
 export default CreateUser;