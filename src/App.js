import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import GreenPlant from "./Components/Pages/GreenPlantPage/GreenPlant";
import Home from "./Components/Pages/HomePage/Home";
import GiftPlant from "./Components/Pages/GiftPlant/GiftPlant";
import IndoorPlant from "./Components/Pages/IndorPlantPage/IndoorPlant";
import Blog from "./Components/Pages/BlogPage/Blog";
import More from "./Components/Pages/MorePage/More";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path = "/greenplant" element = {<GreenPlant/>}/>
        <Route path = "/giftplant" element = {<GiftPlant/>}/>
        <Route path = "/indoorplant" element = {<IndoorPlant/>}/>
        <Route path = "/Blog" element = {<Blog/>}/>
        <Route path = "/More" element = {<More/>}/>
      </Route>
    </Routes>
  );
}

export default App;
