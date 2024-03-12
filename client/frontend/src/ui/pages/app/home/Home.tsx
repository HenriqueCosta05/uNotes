import NoteFilter from "../../../components/app/home/NoteFilter/NoteFilter";
import NoteList from "../../../components/app/home/NoteList/NoteList";
import Searchbar from "../../../components/app/home/Searchbar/Searchbar";
import Header from "../../../components/shared/header/Header";

export default function Home() {

  return (
    <>
      
      <Header logo="uNotes" buttonText={""} buttonLink={""} />
      <h1 className="text-center font-bold text-purple-900">My Notes</h1>
          <Searchbar />
          <NoteFilter />
          <NoteList notesNumber={10} />
    </>
  )
}
