import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    dato1: '',
    dato2: '',
    dato3: '',
    selectedOption: 'someOption',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    setFormData({
      dato1: '',
      dato2: '',
      dato3: '',
      selectedOption: 'someOption',
    });

    // Aqui va tu backend
  };

  return (
    <div className="App">
      <header className="Super Forms">
        <h1>Super Forms</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="dato1"
            placeholder="Dato1"
            value={formData.dato1}
            onChange={handleInputChange}
          />
          <input
            name="dato2"
            placeholder="Dato2"
            value={formData.dato2}
            onChange={handleInputChange}
          />
          <input
            name="dato3"
            placeholder="Dato3"
            value={formData.dato3}
            onChange={handleInputChange}
          />
          <select
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleInputChange}
          >
            <option value="someOption">Opcion1</option>
            <option value="otherOption">Opcion2</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;

