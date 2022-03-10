<<<<<<< HEAD
import React, { useState} from "react";
import "../FormStyles.css";
=======
import React, { useState } from "react";
import "../FormStyles.css";
import { postMember } from "../../Services/membersService.js";
>>>>>>> b6305fcb037f58a8e33fb38971b1566cefb5729a

const MembersForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
  });
<<<<<<< HEAD

  
=======
>>>>>>> b6305fcb037f58a8e33fb38971b1566cefb5729a

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
<<<<<<< HEAD
    }
    if (e.target.name === "description") {
      setInitialValues({ ...initialValues, description: e.target.value });
    }
=======
    }
    if (e.target.name === "description") {
      setInitialValues({ ...initialValues, description: e.target.value });
    }
>>>>>>> b6305fcb037f58a8e33fb38971b1566cefb5729a
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMember(initialValues);
    console.log(initialValues);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={initialValues.name}
        onChange={handleChange}
        placeholder="Name"
      ></input>
      <input
        className="input-field"
        type="text"
        name="description"
        value={initialValues.description}
        onChange={handleChange}
        placeholder="Write some description"
      ></input>
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default MembersForm;
