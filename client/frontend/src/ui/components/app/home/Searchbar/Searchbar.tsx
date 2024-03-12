import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSearch } from 'react-icons/fa'
import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import useScreenSize, {getBreakPoint} from '../../../../../services/hooks/useScreenSize/useScreenSize'

export default function Searchbar() {
  const screenSize = useScreenSize();
  const breakpoint = getBreakPoint(screenSize);
  return (
    <>
      {breakpoint.includes("lg") && (
        <SearchbarNormal />
      )}
      {!breakpoint.includes("lg") && (
        <SearchbarResponsive />
      )}
    </>
  )
}

function SearchbarNormal() {
  return (
      <div className='my-10'>
          <Form className='w-2/3 m-auto flex'>
              <FormControl type="text" placeholder="Search for notes..." className="w-2/3 m-auto flex" />
              <Button  type="button" variant="secondary" className='ml-2'>
                  Search
                  <FontAwesomeIcon icon={FaSearch} />
              </Button>
          </Form>
    </div>
  )
}

function SearchbarResponsive() {
  return (
      <div className='my-10'>
          <Form className='m-auto flex'>
              <FormControl type="text" placeholder="Search for notes..." className="w-2/3 m-auto flex" />
              <Button  type="button" variant="secondary" className='ml-2'>
                  Search
                  <FontAwesomeIcon icon={FaSearch} />
              </Button>
          </Form>
    </div>
  )
}