import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@/shared/ui/Container";
import { Layout } from "@/entities/Layout";
import { Home } from "@/pages/Home";
import { Movies } from "@/pages/Movies";
import { Series } from "@/pages/Series";
import { Tvplus } from "@/pages/Tvplus";
import { Cartoon } from "@/pages/Cartoon";
import { MediaDetails } from "@/entities/MediaDetails";
import { NotFound } from "@/pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/cartoon" element={<Cartoon />} />
            <Route path="/tvplus" element={<Tvplus />} />
            <Route path="/film/:mediaId" element={<MediaDetails />} />
            <Route path="/serial/:mediaId" element={<MediaDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
