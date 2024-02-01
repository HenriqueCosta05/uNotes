import { Button, Container } from 'react-bootstrap';

interface BannerProps {
    heading: string;
    description: string;
    buttonText: string;
    imgUrl: string;
}

export default function Banner({ heading, description, buttonText, imgUrl }: BannerProps) {
    return (
        <div className='bg-violet-950 m-0 flex flex-col md:flex-col lg:flex-row w-full pb-16'>
            <div className="flex flex-col justify-start items-start p-6 md:p-48 w-full md:w-full lg:w-1/2 mt-24">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-purple-200">{heading}</h1>
                <p className="text-xl font-normal mt-4  text-zinc-50">{description}</p>
                <Button className="btn-primary font-bold mt-16 flex self-center scale-100">{buttonText}</Button>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center mx-auto md:mr-36">
                <img src={imgUrl} alt="demo" className="justify-center rounded-2 mx-auto flex-wrap w-full md:w-full lg:w-1/2 xl:w-auto" />
            </div>
        </div>
    );
}