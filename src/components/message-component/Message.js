import React, { useState } from "react";
import axios from "axios";

function Message(params) {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(formData);
      const response = await axios.post("http://localhost:3001/sendEmail", formData);

      console.log("Response:", response.data);

      setFormData({
        to: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      id="divSendMessage"
      style={{
        margin: "20px 20px 20px 21vw",
        display: "flex",
        padding: "30px",
        justifyContent: "space-around",
        display: "none",
      }}
    >
      <form id="formBroadcastEmail" onSubmit={handleSubmit}>
        <label>To</label>
        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={handleChange}
          required
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label>Message</label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Message;
