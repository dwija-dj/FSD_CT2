import React, { useState } from 'react';
import axios from 'axios';
import './AddMember.css';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: ''
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) data.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/members', data);
      setMessage('Member added successfully!');
      setFormData({
        name: '',
        rollNumber: '',
        year: '',
        degree: '',
        aboutProject: '',
        hobbies: '',
        certificate: '',
        internship: '',
        aim: ''
      });
      setImage(null);
    } catch (err) {
      setMessage('Error: ' + err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="add-member-container">
      <h2>Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map(key => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.replace(/([A-Z])/g, ' $1')}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        ))}
        <input type="file" onChange={handleImageChange} required />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddMember;
