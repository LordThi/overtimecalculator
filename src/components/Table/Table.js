import { useState } from 'react';

import ClassicalHoursTable from 'src/components/Table/ClassicalHoursTable';
import CustomHoursTable from 'src/components/Table/CustomHoursTable';

export default function Table () {

  const [isClassicalHours, setClassicalHours] = useState(true)

  const setToogleHoursType = () => {
    setClassicalHours(!isClassicalHours);
  }

  return (
  <>
  <button onClick={setToogleHoursType}>click moi</button>
  { isClassicalHours ?
    <ClassicalHoursTable/>
    : <CustomHoursTable/>
  }
  </>
  );
};
