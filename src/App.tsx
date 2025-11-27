import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./routes/Homepage";
import Tanaman from "./routes/Tanaman";
import TanamanInfo from "./routes/TanamanInfo";
import Galeri from "./routes/Galeri";
import Photos from "./routes/Photos";
import About from "./routes/About";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/tanaman" element={<Tanaman />} />
        <Route path="/tanaman/:id" element={<TanamanInfo />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/about" element={<About />} />
      </Route>
      
      <Route path="/photos/:id" element={<Photos />} />
    </Routes>
  )
}

export default App