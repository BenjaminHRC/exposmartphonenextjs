import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";

export default function History() {
  return (
    <section id="history" className="snap-start h-screen px-8">
      <Navbar />
      <h1 className="text-4xl font-bold py-3 text-white">Un peu d'histoire</h1>
      <div className="h-full pb-20 grid grid-cols-2 gap-10 place-items-center">
        <div className="px-4 pb-10 max-w-2xl">
          <div className="bg-white bg-opacity-10 md:shadow-xl rounded-lg">
            <div className="py-1 opacity-100">
              <div className="p-4">
                <h2 className="font-bold mb-2 md:mt-4 text-2xl text-gray-100">
                  Les premiers smartphones sont apparus dans les années 1990, la
                  ou internet commence à être connu du grand public
                </h2>
                <p className="break-words text-sm text-gray-100 px-2 mr-1">
                  Les premiers smartphones sont apparus dans les années 1990, la
                  ou internet commence à être connu du grand public. À cette
                  époque, les smartphones utilisaient déjà certaines
                  technologies que nos actuels machines utilisent. Comme par
                  exemple l'écran tactile, internet, GPS, clavier intégré
                  (clavier physique)... Ce qui était déjà une prouesse et
                  impressionnant de voir leur vision long terme et d'avenir.
                  Trois constructeur était dans la course dans les années 1990 :
                </p>
                <ul className="list-disc break-words text-sm text-gray-100 px-6 py-2 mr-1">
                  <li className="">IBM avec leurs premiers Simon en 1993</li>
                  <li>PALM et leur PDA (Personnal Digital Assistant)</li>
                  <li>NOKIA est leur gamme Communicator 9000</li>
                </ul>
                <p className="break-words text-sm text-gray-100 px-2 mr-1">
                  Ce sont trois entreprises qui ont commencé à développer les
                  premiers smartphones. Mais le grand public n'était pas encore
                  convaincu par ces nouvelles technologies. Ce n'est qu'en 2007
                  grâce à un certains prénommé Steve Jobs que les smartphones
                  ont commencé à réellement intéresser le grand public. Le
                  premier iPhone avait mis tout le monde d’accord, de par son
                  design, son système d’exploitation simple et intuitif, son
                  écran tactile… Bref, il avait tout pour plaire et à su
                  s’imposer parmi les géants de l'époque.
                </p>
                <p className="break-words text-sm text-gray-100 px-2 mr-1">
                  À l'époque trois systeme d’exploitation existaient :
                </p>
                <ul className="list-disc break-words text-sm text-gray-100 px-6 py-2 mr-1">
                  <li>Symbian</li>
                  <li>Windows mobile</li>
                  <li>Blackberry OS</li>
                </ul>
                <p className="break-words text-sm text-gray-100 px-2 mr-1">
                  Les téléphones pouvaient supporter nativement les écrans
                  tactiles mais les système d’exploitation n'était pas optimisé
                  pour
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white">
          <Carousel infiniteLoop={true} showThumbs={false}>
            <div>
              <img src="/nokia2.jpg" />
              <p className="legend">
                Le nokia 9110 Communicator sortie en 1998
              </p>
            </div>
            <div>
              <img src="/palm-treo-750.jpg" />
              <p className="legend">
                Le Palm Treo 750 tourne sous windows mobile
              </p>
            </div>
            <div>
              <img src="/iphone2.jpg" />
              <p className="legend">
                L'iPhone 1 "This is a revelotion" Steve Jobs - 2007
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
