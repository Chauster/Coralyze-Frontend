import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import axios from 'axios';
import './SupportSection.css';

function SupportSection() {
  const [_id, setID] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [ticketList, setTicketList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/tickets/')
  //     .then((res) => {
  //       setTicketList(res.data);
  //       // setTicketList(res.data.map((ticket) => ticket));
  //       // console.log(res.data);
  //       console.log(ticketList);
  //     })
  //     .then(setIsLoading(false))
  //     .catch((err) => {
  //       console.log('No tickets to display!');
  //       console.log('Error: ' + err);
  //     }, []);
  // }, []);

  const loadTickets = () => {
    axios
      .get('http://localhost:5000/tickets/')
      .then((res) => {
        setTicketList(res.data);
        // console.log(ticketList);
      })
      .then(setIsLoading(false))
      .catch((err) => {
        console.log('No tickets to display!');
        console.log('Error: ' + err);
      }, []);
  };

  let handleIDChange = (event) => {
    setID(event.target.value);
  };

  let handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  let handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const clearState = () => {
    setID('');
    setSubject('');
    setDescription('');
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    const ticket = {
      _id: subject,
      subject: subject,
      description: description,
    };

    axios.post('http://localhost:5000/tickets/add', ticket).then((res) => {
      console.log(res.data);
      console.log('Ticket created.');
      clearState();
      loadTickets();
    });
  };

  return (
    <div className="main_section">
      <h3 className="form_title">Existing tickets.</h3>
      <div className="ticket_container">
        <ul className="ticket_box">
          {isLoading ? (
            <li className="ticket_item">
              <span className="ticket_subject">Loading tickets...</span>
            </li>
          ) : (
            Object.keys(ticketList).map((ticket) => {
              return (
                <li className="ticket_item">
                  <span key={ticketList[ticket]._id} className="ticket_subject">
                    {ticketList[ticket].subject}
                  </span>
                  <br />
                  <span
                    key={ticketList[ticket]._id}
                    className="ticket_description"
                  >
                    {ticketList[ticket].description}
                  </span>
                </li>
              );
            })
          )}
        </ul>
        <div className="load_btn">
          <Button
            buttonSize="btn--medium"
            buttonColor="primary"
            onClick={loadTickets}
          >
            Load Tickets
          </Button>
        </div>
      </div>
      <h3 className="form_title">Create a ticket.</h3>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form_inputs">
          <div class="form_subtitle">
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
          </div>
          <input
            required
            minLength="3"
            id="subject"
            type="text"
            name="subject"
            className="form_input"
            placeholder="Enter the subject of the ticket"
            value={subject}
            onChange={(handleIDChange, handleSubjectChange)}
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
            minLength="10"
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
