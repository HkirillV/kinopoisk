import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "widgets/Header";

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
      </BrowserRouter>
  )
}