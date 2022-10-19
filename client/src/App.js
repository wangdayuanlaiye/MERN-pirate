import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import PirateForm from "./components/PirateForm";
import EditPirate from "./components/EditPirate";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/pirates" element={<DisplayAll/>} />
          <Route path="/pirate/new" element={<PirateForm/>} />
          <Route path="/pirate/:id" element={<EditPirate/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;