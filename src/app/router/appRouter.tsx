import { BrowserRouter, Routes, Route } from "react-router";
import { Container } from "@/shared/ui/Container";
import { Home } from "@/pages/Home";
import { MovieDetails } from "@/entities/MovieDetails/ui";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:movieId" element={<MovieDetails/>}/>
          <Route path="*"/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default AppRouter;