import React, { useState, useEffect } from 'react';

const Service = () => {
  const [isLoaded, setisLoaded] = useState(false);
  //const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setisLoaded(true);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // const handleButtonClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <h1>Service Page</h1>
      <hr />
      <p>Welcome to the Service page!</p>      
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


      <button type="button" className="btn btn-primary">
        The Time Now {isLoaded ? currentTime : "Try Again!"}
      </button>
    </div>
  );
};

export default Service;
