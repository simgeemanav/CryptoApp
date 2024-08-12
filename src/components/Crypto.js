import React from 'react';
import TableComp from './TableComp';
import Filters from './Filters'
function Crypto() {
  return (
  <section
  className='w-[80%] h-full flex flex-col mt-16 mb-24 relative'
  >
    <Filters/>
    <TableComp/>
    </section>
  )
}

export default Crypto;
