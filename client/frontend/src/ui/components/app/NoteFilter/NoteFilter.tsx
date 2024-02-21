import React, { useEffect, useState } from 'react'
import { getFilters } from '../../../../services/utils/getFilters'
import { Button, ButtonGroup } from 'react-bootstrap';

export default function NoteFilter() {
  const useFilter = getFilters();
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    useFilter.then((res) => {
      while (res) {
        setFilters(res);
        return res;
      }
    })
  })
  return (
    <div className='w-3/4 m-auto flex justify-center'>
      <ButtonGroup>
      {filters.map((f: string, k: number) => {
        return (
          <Button type="button" key={k} className="lg:mx-2 mx-2.5" style={{backgroundColor: "rgb(107 33 168)", color: "rgb(255,250,255)", borderRadius: "2rem", border: "none"}}>{f}</Button>
        )
      })}
    </ButtonGroup>
    </div>
    
  )
}
