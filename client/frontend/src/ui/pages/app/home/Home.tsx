import NoteFilter from "../../../components/app/NoteFilter/NoteFilter";
import NoteList from "../../../components/app/NoteList/NoteList";
import Searchbar from "../../../components/app/Searchbar/Searchbar";
import Header from "../../../components/homepage/header/Header";

export default function Home() {
  return (
    <>
          <Header />
          <Searchbar />
          <NoteFilter />
          <NoteList />
    </>
  )
}
