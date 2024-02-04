import React, { useEffect, useState } from 'react'
import Banner from '../../components/homepage/banner/Banner'
import Features from '../../components/homepage/features/Features'
import Header from '../../components/homepage/header/Header'
import Pricing from '../../components/homepage/pricing/Pricing'
import { Spinner } from 'react-bootstrap'
import useFetch from '../../../services/hooks/useFetch/UseFetch'
import readJSON from '../../../lib/utils/readJSON'
import rename from '../../../lib/utils/rename'


export default function Home() {
  const { data: homepageinfo, isPending, error } = useFetch('http://localhost:8000/homepageinfo')
  const [headerData, setHeaderData] = useState<any | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await readJSON();
      setHeaderData(response.homepageinfo[0].header);
    };
    fetchData();
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <Spinner animation='border' variant='primary' className='p-4 d-flex align-items-center mx-auto my-40'/>}
      {homepageinfo && headerData && <Header logo={(headerData[0].name)} navlink1={rename(headerData[1].name)} navlink2={rename(headerData[2].name)} navlink3={rename(headerData[3].name)} buttontext={rename(headerData[4].name)} />}
    </>
  )
}