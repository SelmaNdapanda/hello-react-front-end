import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchGreeting from '../redux/fetchGreeting';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  const message = useSelector((state) => state.greet);
  return (
    <h1>
      Message:
      {message.data.text}
    </h1>
  );
};

export default Greeting;
