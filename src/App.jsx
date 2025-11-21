import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import MainLayout from "./Router";
import Detail from "./Detail";

function App() {
  return (
    <>
      <Header/>
      <MainLayout/>
    </>
  );
}

export default App;
