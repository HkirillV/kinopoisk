import { BrowserRouter, Routes, Route } from "react-router";
import { Container } from "@/shared/ui/Container";
import { Layout } from "@/pages/Layout";
import { Home } from "@/pages/Home";
import { Movies } from "@/pages/Movies";
import { Series } from "@/pages/Series";
import { Tvplus } from "@/pages/Tvplus";
import { Animation } from "@/pages/Animation";
import { MediaDetails } from "@/entities/MediaDetails";
import { NotFound } from "@/pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/animation" element={<Animation />} />
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
