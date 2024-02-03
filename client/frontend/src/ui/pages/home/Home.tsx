import Banner from '../../components/homepage/banner/Banner'
import Features from '../../components/homepage/features/Features'
import Header from '../../components/homepage/header/Header'
import Pricing from '../../components/homepage/pricing/Pricing'
export default function Home() {
  return (
    <>
      <Header />
      <Banner heading='Seize Ideas, Streamline Productivity: Your Notes, Anywhere, Anytime.' description='uNotes is a note-taking app designed for those who want to make life easier and more productive.' imgUrl='/assets/demo.jpg' buttonText='Start a free-trial for 15 days!'/>
      <h1 className="text-violet-950 bg-neutral-300 text-center pt-28 font-black text-6xl">Features</h1>
      <div className='flex flex-wrap justify-center'>
        <Features cardTitle='Filter by topic' cardDescription='In uNotes, users can effortlessly compose and organize their thoughts by creating notes and seamlessly filtering them based on specific topics, offering a intuitive note-taking experience.' imgUrl='/assets/demo.jpg' buttonText='Check it out!' />
        <Features cardTitle='Customize your notes' cardDescription='uNotes allows users to customize their notes by adding images, links, and lists, making it easier to express their thoughts and ideas in a more personalized and creative way.' imgUrl='/assets/demo.jpg' buttonText='Check it out!'/>
        <Features cardTitle='Access your notes anywhere' cardDescription='With uNotes, users can access their notes from any device, anywhere, anytime. Whether you are at home, in the office, or on the go, uNotes makes it easy to stay organized and productive.' imgUrl='/assets/demo.jpg' buttonText='Check it out!'/>
        <Features cardTitle='Stay organized' cardDescription='uNotes offers a variety of features to help users stay organized, including the ability to create notebooks, add tags, and search for notes, making it easier to find and manage notes.' imgUrl='/assets/demo.jpg' buttonText='Check it out!'/>
        <Features cardTitle='Collaborate with others' cardDescription='In uNotes, users can collaborate with others by sharing notes and notebooks, making it easier to work together and share ideas, whether you are in the same room or on the other side of the world.' imgUrl='/assets/demo.jpg' buttonText='Check it out!'/>
        <Features cardTitle='Stay productive' cardDescription='uNotes offers a variety of features to help users stay productive, including the ability to set reminders, create to-do lists, and set goals, making it easier to stay focused and achieve more.' imgUrl='/assets/demo.jpg' buttonText='Check it out!'/>
      </div>
      <Pricing/>
    </>
  )
}