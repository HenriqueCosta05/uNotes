import React, { useEffect, useState } from 'react'
import Banner from '../../components/homepage/banner/Banner'
import Features from '../../components/homepage/features/Features'
import Header from '../../components/shared/header/Header'
import Pricing from '../../components/homepage/pricing/Pricing'
import { Spinner } from 'react-bootstrap'
import useFetch from '../../../services/hooks/useFetch/UseFetch'
import readJSON from '../../../services/utils/readJSON'
import rename from '../../../services/utils/rename'
import Footer from '../../components/homepage/footer/Footer'

export default function Home() {
  const { data: homepageinfo, isPending, error } = useFetch('http://localhost:8000/homepageinfo')
  const [headerData, setHeaderData] = useState<any | null>(null)
  const [bannerData, setBannerData] = useState<any | null>(null)
  const [featuresData, setFeaturesData] = useState<any | null>([])
  const [pricingData, setPricingData] = useState<any | null>([])
  const [footerData, setFooterData] = useState<any | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await readJSON();
      setHeaderData(response.homepageinfo[0].header);
      setBannerData(response.homepageinfo[0].banner);
      setFeaturesData(response.homepageinfo[0].features);
      setPricingData(response.homepageinfo[0].pricing);
      setFooterData(response.homepageinfo[0].footer);
    };
    fetchData();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <Spinner animation='border' variant='primary' className='p-4 d-flex align-items-center mx-auto my-40'/>}
      
      {homepageinfo && headerData && (
        <Header logo={headerData[0].name} navlink1={rename(headerData[1].name)} navlink2={rename(headerData[2].name)} navlink3={rename(headerData[3].name)}buttontext={rename(headerData[4].name)} buttonLink='/auth/login' />
      )}
      
      {homepageinfo && bannerData && (
        <Banner heading={bannerData[0].name} description={bannerData[1].name} buttonText={rename(bannerData[2].name)} imgUrl={bannerData[3].name} />
      )}
        
      <div className='flex flex-wrap justify-center items-center'>
        {homepageinfo && featuresData && (
          <div className='w-11/12'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-black text-purple-900 flex justify-center mx-auto my-20'>{featuresData[6].header}</h1>
          <p className='text-xl font-normal mt-4 text-black flex justify-center text-center mx-auto lg:w-3/4'>{featuresData[6].description}</p>
          </div>
          
        )}
        {homepageinfo && featuresData && featuresData.filter((element, index)=> index < featuresData.length - 1).map((feature: any, index: number) => {
          return feature && <Features key={index} cardTitle={feature.title} cardDescription={feature.description} imgUrl={feature.imgUrl} buttonText={rename(feature.buttonText)} />
        })}
      </div>
      <div className='bg-violet-950 mt-20 flex flex-wrap justify-center items-center w-full'>
        {homepageinfo && pricingData && (
          <div className='w-full'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-black text-purple-200 flex justify-center mx-auto my-20'>{pricingData[3].heading}</h1>
          <p className='text-xl font-normal mt-4 text-slate-50 flex justify-center text-center mx-auto lg:w-3/4'>{pricingData[3].description}</p>
          </div>
          )}
        {homepageinfo && pricingData && pricingData.filter((element, index) => index < pricingData.length - 1).map((pricing: any, index: number) => {
          return pricing && <Pricing key={index} cardTitle={pricing.name} cardPrice={pricing.price} cardDescription={pricing.description} features={pricing.features} buttonText={rename(pricing.buttonText)} />
        })}
      </div>
      {homepageinfo && footerData && (
        <Footer footerText={footerData[0].name} />
        )
      }
    </>
  )
}