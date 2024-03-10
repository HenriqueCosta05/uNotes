import React from 'react'
import { Button } from 'react-bootstrap';
import useScreenSize, { getBreakPoint } from '../../../services/hooks/useScreenSize/useScreenSize';
interface ExternalLoginButtonProps {
  text: string;
  link: string;
  iconUrl: string;
  iconWidth: number;
}

export default function ExternalLoginButton({text, link, iconUrl, iconWidth}: ExternalLoginButtonProps) {
  const screenSize = useScreenSize();
  const breakpoint = getBreakPoint(screenSize);
  return (
    <>
      {breakpoint.includes("lg") && (
        <ExternalLoginButtonNormal text={text} link={link} iconUrl={iconUrl} iconWidth={iconWidth} />
      )}
      {breakpoint.includes("md") || breakpoint.includes("sm") && (
        <ExternalLoginButtonResponsive text={text} link={link} iconUrl={iconUrl} iconWidth={iconWidth}/>
      )}
    </>
  )
}

function ExternalLoginButtonNormal({ text, link, iconUrl, iconWidth }: ExternalLoginButtonProps) {
  return (
    <Button variant='secondary' style={{backgroundColor: "rgb(256,256,256)", color: "rgb(46 16 101)", width: "90%", marginBottom: "20px"}} href={link}>
        <div className="flex flex-nowrap justify-center items-center mx-20 font-medium">
          {text}
        <img src={iconUrl} width={iconWidth} alt="icon" className="text-2xl ml-2 flex flex-nowrap" />
        </div>
        
    </Button>
  )
}

function ExternalLoginButtonResponsive({ text, link, iconUrl, iconWidth }: ExternalLoginButtonProps) {
  return (
    <Button variant='secondary' style={{backgroundColor: "rgb(256,256,256)", color: "rgb(46 16 101)", width: "100%", marginBottom: "20px"}} href={link}>
        <div className="flex flex-nowrap justify-center items-center font-medium">
          {text}
        <img src={iconUrl} width={iconWidth} alt="icon" className="text-2xl ml-2 flex flex-nowrap" />
        </div>
    </Button>
  )
}