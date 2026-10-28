import notFoundAnimation from "../assets/not-found.gif";
import "./PNF.css";

const PNF = () => {
  return (
    <main className="not-found">
      <img
        className="not-found__animation"
        src={notFoundAnimation}
        alt="Animated 404 illustration showing someone searching for a missing page"
      />
    </main>
  );
};

export default PNF;
