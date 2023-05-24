import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [divs, setDivs] = useState([]);
  const [message, setMessage] = useState(false);
  const divsRef = useRef([]);

  const handleCreateDiv = (e) => {
    e.preventDefault();

    if (input1 === '' || input2 === '') {
      setMessage(true);
      return;
    }

    const newDiv = {
      id: idCounter,
      background: 'white',
      input1,
      input2
    };

    setDivs([...divs, newDiv]);
    setInput1('');
    setInput2('');
    setMessage(false);

    setIdCounter(idCounter => idCounter + 1);
  };

  const handleDeleteDiv = (id) => {
    divsRef.current = divsRef.current.filter((item) => item.id !== id);
    setDivs(divsRef.current);
  };

  return (
    <div className="container">
      <form className='inputs-container'>
        <div>
          <label>Name</label>
          <input value={input1} type='text' id='name' placeholder='First Name' onChange={(e) => setInput1(e.target.value)} />

          <label>Lastname</label>
          <input value={input2} type='text' id='lastname' placeholder='Last Name' onChange={(e) => setInput2(e.target.value)} />

          <button onClick={handleCreateDiv} className='submit-btn'>Submit</button>
        </div>
        {message && <h3 style={{ marginTop: '10px' }}>Please write your firstname and lastname</h3>}
      </form>
      <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {divs.map((div) => (
          <div
            key={div.id}
            style={{
              width: '90%',
              height: '70px',
              background: div.background,
              display: 'flex',
              marginTop: '50px',
              paddingInline: '20px',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <div style={{ display: 'flex' }}>
              <h3>First Name:</h3>
              <h3 style={{ marginInline: '10px' }}>{div.input1}</h3>

              <h3>Last Name:</h3>
              <h3 style={{ marginInline: '10px' }}>{div.input2}</h3>
            </div>

            <button onClick={() => handleDeleteDiv(div.id)} className='delete-cards'>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
