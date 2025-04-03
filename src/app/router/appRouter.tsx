import { BrowserRouter, Routes, Route } from "react-router";
import { Container } from "@/shared/ui/Container";
import { Home } from "@/pages/Home";

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*"/>
          </Routes>
        </Container>
      </BrowserRouter>
  )
}

export default AppRouter;