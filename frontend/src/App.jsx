import { Route, Routes } from "react-router";

import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
// import toast from "react-hot-toast";


const App = () => {
  return <div data-theme="forest">
    <button className="btn btn-primary">CLICK ME</button>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
      </Routes>
    </div>
};

export default App;