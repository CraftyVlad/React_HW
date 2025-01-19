import React, { useEffect, useState } from 'react';

// 1.Створіть додаток, який відображає поточний час. Обов'язково вико­ристо­вуйте функціональні компоненти.

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>Current time</h1>
      <h2>{time.toLocaleTimeString("it-IT")}</h2>
    </div>
  );
};

export default Clock;