import { Route, Routes } from "react-router-dom";
import BookInclusion from "./component/bookInclusion";
import SuperiorMenu from "./component/superiorMenu";
import BookManutention from "./component/bookManutention";
import BookResume from "./component/bookResume";

const App=()=>{
  return (
    <>
      <SuperiorMenu/>
        <Routes>
          <Route path="/" element={<BookInclusion/>}/>
          <Route path="manut" element={<BookManutention/>}/>
          <Route path="resumo" element={<BookResume/>}/>
        </Routes>
    </>
  );
}

export default App;
