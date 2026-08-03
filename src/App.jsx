
import {Routes, Route} from "react-router";
import Home from "@/pages/home";
import Movie from "@/pages/movie";
import MovieDetail from "@/pages/moviedetails";
import About from "@/pages/about";
import NotFound from "@/pages/notfound";

import RootLayout from "@/layout/rootlayout";
import Landing from "./pages/landing";

function App() {

  return (
    <>
 <Routes>
<Route path="/" element={<Landing /> }/>

<Route element={<RootLayout />}>

 <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />



</Route>


 </Routes>
     
    </>
  )
}

export default App
