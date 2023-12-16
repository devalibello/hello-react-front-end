import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../actions/greetingActions';

const Greeting = () => {
  const dispatch = useDispatch();
  const salutation = useSelector((state) => state.greeting.greeting);

  useEffect(() => {
    // console.log("A")
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h4 style={{ color: '#333' }}>Refresh Page To Receive Random Salutation</h4>
      <p style={{ color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>{salutation}</p>
    </div>
  );
};

export default Greeting;
