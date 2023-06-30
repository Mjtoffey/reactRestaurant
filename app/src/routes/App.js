import Header from "./Header"
import Navbar from "./Navbar"
import Appetizers from "./Appetizers"
import Breakfast from "./Breakfast"
import Lunch from "./Lunch"
import Dinner from "./Dinner"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Appetizers" element={<Appetizers />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Lunch" element={<Lunch />} />
          <Route path="/Dinner" element={<Dinner />} />
        </Routes>
      </div>
    </>
  )
}

export default App