import { BrowserRouter, Routes, Route } from "react-router";
import { Container } from '@/app/Container';
import { Home } from "@/pages/Home"

export const AppRouter = () => {
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