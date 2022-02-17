import Economie from "../components/Economie";
import Environement from "../components/Evironement";
import History from "../components/History";

export default function Main() {
  return (
    <>
      <div className="snap-y snap-mandator overflow-scroll h-screen">
        <History />
        <Economie />
        <Environement />
      </div>
    </>
  );
}
