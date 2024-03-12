import { useEffect, useState } from 'react'
import { getFilters } from '../../../../../services/utils/getFilters'
import { Button, ButtonGroup } from 'react-bootstrap';
import useScreenSize, {getBreakPoint} from '../../../../../services/hooks/useScreenSize/useScreenSize';
export default function NoteFilter() {
  const screenSize = useScreenSize();
  const breakpoint = getBreakPoint(screenSize)
  return (
    <>
      {breakpoint.includes("lg") && (
        <NoteFilterNormal/>
      )}
      {!breakpoint.includes("lg") && (
        <NoteFilterResponsive/>
      )}
    </>
    
  )
}

function NoteFilterNormal() {
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

function NoteFilterResponsive() {
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
    <div className='w-11/12 m-auto flex justify-center'>
      <ButtonGroup className='flex flex-wrap items-center justify-center'>
      {filters.map((f: string, k: number) => {
        return (
          <Button type="button" key={k} className="m-1.5" style={{backgroundColor: "rgb(107 33 168)", color: "rgb(255,250,255)", borderRadius: "1rem", border: "none"}}>{f}</Button>
        )
      })}
    </ButtonGroup>
    </div>
  )
}
