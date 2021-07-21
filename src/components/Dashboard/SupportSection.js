import React, { useState } from 'react';
import { Button } from '../Button';
import './SupportSection.css';

function SupportSection() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  let handleSubjectChange = (event) => {
    //Handle subject changing
    setSubject(event.target.value);
  };

  let handleDescriptionChange = (event) => {
    //Handle description chaning
    setDescription(event.target.value);
  };

  let handleSubmit = (event) => {
    //Submit ticket to coralyze email implemented later
    event.preventDefault();

    const ticket = {
      subject: subject,
      description: description,
    };

    console.log(ticket);
  };

  return (
    <div className="main_section">
      <div className="ticket_container">
        Ticket list box to be added above...
      </div>
      <h3 class="form_title">Create Ticket</h3>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form_inputs">
          <div class="form_subtitle">
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
          </div>
          <input
            required
            minLength="2"
            id="subject"
            type="text"
            name="subject"
            className="form_input"
            placeholder="Enter the subject of the ticket"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="form_inputs">
          <div class="form_subtitle">
            <label htmlFor="description" className="form_label">
              Description
            </label>
          </div>
          <textarea
            required
            minLength="50"
            maxLength="200"
            id="description"
            type="text"
            name="description"
            className="form_input"
            placeholder="Enter a description of the issue (max 200 characters)"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form_btn">
          <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SupportSection;
