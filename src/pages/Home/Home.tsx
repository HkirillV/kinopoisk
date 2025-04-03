import { Header } from "@/widgets/Header/ui";
import { Movie } from "@/entities/Movie/ui";

import "./Home.scss";

export const Home = () => {

  return (
    <div className="home">
      <Header/>
      <Movie/>
    </div>
  )
}