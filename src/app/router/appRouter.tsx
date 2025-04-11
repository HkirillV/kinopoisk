import { BrowserRouter, Routes, Route } from "react-router";
import { Container } from "@/shared/ui/Container";
import { Home } from "@/pages/Home";
import { Movies } from "@/pages/Movies/ui";
import { Series } from "@/pages/Series/ui";
import { Tvplus } from "@/pages/Tvplus/ui";
import { Animation } from "@/pages/Animation/ui";
import { MediaDetails } from "@/entities/MediaDetails/ui";
import { NotFound } from "@/pages/NotFound/ui";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/animation" element={<Animation/>}/>
          <Route path="/tvplus" element={<Tvplus/>}/>
          <Route path="/film/:mediaId" element={<MediaDetails/>}/>
          <Route path="/serial/:mediaId" element={<MediaDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default AppRouter;