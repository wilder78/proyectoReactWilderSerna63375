import Carrusel from "./Carrusel/Carrusel";
import Comments from "./Comments/comments";
import CommentsThree from "./Comments/CommentsThree";
import CommentsTwo from "./Comments/CommentsTwo";
import Exhibition from "./exhibition/exhibition";
import "./Home.css";
import RegisterEmail from "./RegisterEmail/RegisterEmail";
import WorkTeam from "./WorkTeam/WorkTeam";


function Home() {
  return (
    <>
      <Carrusel />
      <Comments />
      <Exhibition />
      <CommentsTwo />
      <WorkTeam />
      <CommentsThree />
      <RegisterEmail />
      
    </>
  );
}

export default Home;
