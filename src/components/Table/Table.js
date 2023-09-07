import { useState } from 'react';

export default function Table () {

  const [isClassicalHours, setClassicalHours] = useState(true)

  const setToogleHoursType = () => {
    setClassicalHours(!isClassicalHours);
  }

  return (
  <>
  <button onClick={setToogleHoursType}>click moi</button>
  { isClassicalHours ?
<p>Coucou</p>
: <p> ok</p>
  }
  </>
  );
};
