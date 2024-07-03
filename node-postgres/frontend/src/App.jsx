import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [merchants, setMerchants] = useState([]);

  function getMerchant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMerchants(data);
      });
  }

  function createMerchant() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('http://localhost:3001/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }

  function deleteMerchant() {
    let id = prompt('Enter merchant id');
    fetch(`http://localhost:3001/merchants/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }

  function updateMerchant() {
    let id = prompt('Enter merchant id');
    let name = prompt('Enter new merchant name');
    let email = prompt('Enter new merchant email');
    fetch(`http://localhost:3001/merchants/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getMerchant();
      });
  }

  useEffect(() => {
    getMerchant();
  }, []);

  return (
			<>
				<div>
					<a href="https://vitejs.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1>Vite + React</h1>

				<div>
					{merchants.length > 0 ? (
						<ul>
							<h3>List of merchants available</h3>
							{merchants.map((merchant) => (
								<li key={merchant.id}>
									{merchant.id} - {merchant.name} ({merchant.email})
								</li>
							))}
						</ul>
					) : (
						<h3>No available merchants data</h3>
					)}
					<br />
					<button onClick={createMerchant}>Add merchant</button>
					<br />
					<button onClick={deleteMerchant}>Delete merchant</button>
					<br />
					<button onClick={updateMerchant}>Update merchant</button>
				</div>
			</>
		);
}

export default App
