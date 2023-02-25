import React from "react";
import ContactHamburger from "../images/contactHamburger.png";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setSubject("");
    alert("Selam çikolatam");
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeSubject = (e) => {
    setSubject(e.target.value);
  };
  return (
    <div className="contact">
      <div className="contactLeft">
        <img src={ContactHamburger} alt="" />
      </div>
      <div className="contactRight">
        <h2>Contact Us</h2>
        <div className="form">
          <TextField
            id="standard-basic"
            label="FullName"
            variant="standard"
            className="textfield"
            value={name}
            onChange={changeName}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            className="textfield"
            value={email}
            onChange={changeEmail}
          />
          <TextField
            id="standard-basic"
            label="Subject"
            variant="standard"
            className="textfield"
            value={subject}
            onChange={changeSubject}
          />
        </div>
        <Button
          sx={{ marginLeft: "30px", backgroundColor: "#434343" }}
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Contact;
