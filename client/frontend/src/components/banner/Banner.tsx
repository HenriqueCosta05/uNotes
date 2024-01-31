import { Button, Container } from 'react-bootstrap';

interface BannerProps {
    heading: string;
    description: string;
    buttonText: string;
    imgUrl: string;
}

export default function Banner({ heading, description, buttonText, imgUrl }: BannerProps) {
    return (
        <div className='bg-violet-950 m-0 flex flex-col sm:flex-row w-full'>
            <div className="flex flex-col justify-start items-start p-6 sm:p-48 w-full sm:w-3/4 mt-24">
                <h1 className="text-3xl sm:text-6xl font-black text-purple-200">{heading}</h1>
                <p className="text-xl sm:text-2xl font-normal mt-4  text-zinc-50">{description}</p>
                <Button className="btn-primary font-bold mt-16 flex self-center scale-150">{buttonText}</Button>
            </div>
            <div className="flex flex-col justify-center items-center mr-0 sm:mr-36 w-full sm:w-1/2">
                <img src={imgUrl} alt="demo" className="justify-self-center w-full" />
            </div>
        </div>
    );
}