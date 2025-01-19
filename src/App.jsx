import React, { useState, useEffect } from 'react';

// Реалізуйте додаток «Орел або Решка». Користувач загадує орла або решку. Додаток випадково вибирає орла або решку. Якщо вибір користувача співпадає з результатом — він виграв, інакше програв. Використовуйте сайт API random.org.

const CoinFlip = () => {
  const [userChoice, setUserChoice] = useState('');
  const [flipResult, setFlipResult] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setFlipResult('');
    setMessage('');
  };

  useEffect(() => {
    if (userChoice) {
      const fetchFlipResult = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://api.random.org/json-rpc/2/invoke', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              jsonrpc: "2.0",
              method: "generateIntegers",
              params: {
                apiKey: "i hid mine, so insert yours",
                n: 1,
                min: 0,
                max: 1,
              },
              id: 42,
            }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          if (data.result && data.result.random && data.result.random.data) {
            const randomNumber = data.result.random.data[0];
            const result = randomNumber === 0 ? 'Heads' : 'Tails';
            setFlipResult(result);
            setMessage(result === userChoice ? 'You won!' : 'You lost!');
          } else {
            throw new Error('Unexpected response format');
          }
        } catch (error) {
          setMessage('Didnt get result.');
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchFlipResult();
    }
  }, [userChoice]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Heads or tails (CoinFlip)</h1>
      <p>Pick heads or tails</p>
      <div>
        <button onClick={() => handleUserChoice('Heads')}>Heads</button>
        <button onClick={() => handleUserChoice('Tails')}>Tails</button>
      </div>
      {loading && <p>Flipping coin...</p>}
      {flipResult && (
        <div>
          <p>Result: {flipResult}</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default CoinFlip;
