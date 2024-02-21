import { Navbar } from 'react-bootstrap'

type LogoProps = {
  logo: string;
}
export default function Logo({logo}: LogoProps) {
  return (
    <Navbar.Brand href="/" className='navbar-brand'>
            <h1 className="font-black text-purple-800 mx-auto my-2 text-center text-5xl">{logo}</h1>
    </Navbar.Brand>
  )
}
