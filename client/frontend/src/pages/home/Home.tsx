import Banner from '../../components/banner/Banner'
import Header from '../../components/header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Banner heading='Seize Ideas, Streamline Productivity: Your Notes, Anywhere, Anytime.' description='uNotes is a note-taking app designed for those who want to make life easier and more productive.' imgUrl='/assets/demo.jpg' buttonText='Check it out!'/>
    </>
  )
}
