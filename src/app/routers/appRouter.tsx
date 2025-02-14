import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "@/pages/Home"

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*"/>
        </Routes>
      </BrowserRouter>
  )
}