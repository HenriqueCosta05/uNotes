import rootReducer from "../../../../domain/redux/root-reducer";
import type { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import NoteFilter from "../../../components/app/NoteFilter/NoteFilter";
import NoteList from "../../../components/app/NoteList/NoteList";
import Searchbar from "../../../components/app/Searchbar/Searchbar";
import Header from "../../../components/shared/header/Header";

export default function Home() {

  const { currentUser } = useSelector((state: object) => state.user || {});
  const dispatch: Dispatch = useDispatch();

  const handleButtonClick = () => {
    if (currentUser) {
      console.log(currentUser)
      dispatch({ type: "user/logout" });
      return "/"
    }
    dispatch({ type: "user/login" });
    return "/auth/login"
  }

  const handleButtonText = (): string => {  
    if (currentUser) {
      console.log(currentUser)
      return "Logout"
    }
    return "Login"
  }

  const getWelcomeText = () => { 
    if (currentUser) {
      return `Welcome, ${currentUser.name}!`
    }
    return ""
  }

  return (
    <>
      <Header logo="uNotes" buttonLink={handleButtonClick()} buttonText={handleButtonText()} welcomeText={getWelcomeText()} />
          <Searchbar />
          <NoteFilter />
          <NoteList />
    </>
  )
}
