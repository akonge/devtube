import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Video from "./components/video/Video";
import DrawerList from "./components/drawerList/DrawerList";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setOpen={setOpen} />
        <Routes>
          <Route path="/watch" element={<Video />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <DrawerList setOpen={setOpen} />
        </Drawer>
      </div>
    </Router>
  );
}

export default App;
