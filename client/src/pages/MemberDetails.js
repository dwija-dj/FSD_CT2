import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MemberDetails.css';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!member) return <p>Loading...</p>;

  return (
    <div className="details-container">
      <h2>{member.name}</h2>
      <img src={`http://localhost:5000/uploads/${member.image}`} alt="Profile" />
      <p><strong>Roll Number:</strong> {member.rollNumber}</p>
      <p><strong>Year:</strong> {member.year}</p>
      <p><strong>Degree:</strong> {member.degree}</p>
      <p><strong>About Project:</strong> {member.aboutProject}</p>
      <p><strong>Hobbies:</strong> {member.hobbies}</p>
      <p><strong>Certificate:</strong> {member.certificate}</p>
      <p><strong>Internship:</strong> {member.internship}</p>
      <p><strong>Aim:</strong> {member.aim}</p>
    </div>
  );
};

export default MemberDetails;
