import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Navbar from "./Navbar";

const data = [
  {
    name: "2007",
    unites: 122.32,
  },
  {
    name: "2008",
    unites: 139.29,
  },
  {
    name: "2009",
    unites: 172.38,
  },
  {
    name: "2010",
    unites: 296.65,
  },
  {
    name: "2011",
    unites: 472.0,
  },
  {
    name: "2012",
    unites: 680.11,
  },
  {
    name: "2013",
    unites: 969.72,
  },
  {
    name: "2014",
    unites: 1244.74,
  },
  {
    name: "2015",
    unites: 1423.9,
  },
  {
    name: "2016",
    unites: 1495.96,
  },
  {
    name: "2017",
    unites: 1536.54,
  },
  {
    name: "2018",
    unites: 1556.27,
  },
  {
    name: "2019",
    unites: 1540.66,
  },
  {
    name: "2020",
    unites: 1378.72,
  },
  {
    name: "2021",
    unites: 1535.3,
  },
];

export default function Economie() {
  return (
    <section id="economie" className="snap-start h-screen px-8">
      <Navbar />
      <h1 className="text-4xl font-bold text-white text-right">Economie</h1>
      <div className="flex gap-10 h-5/6	">
        <div className="basis-2/3 p-8 ">
          <h1 className="pb-3 text-white text-xl font-semibold">
            Nombre de téléphone vendue par année{" "}
            <span className="text-lg text-emerald-400">
              (en millions d’unités)
            </span>
          </h1>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis
                label={{
                  value: "Nombres par unités",
                  angle: -90,
                  position: "insideLeft",
                  fill: "white",
                }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="unites" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="basis-1/3 p-8 ">
          <h1 className="text-white text-xl font-semibold mb-4">
            Quelques statistiques
          </h1>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="px-4 pb-10 max-w-xl">
              <div className="bg-white bg-opacity-10 md:shadow-xl rounded-lg border-l-4 border-l-indigo-500">
                <div className="py-1 opacity-100">
                  <div className="p-4">
                    <h2 className="font-bold mb-2 md:mt-4 text-2xl text-gray-100">
                      L'utilisation d’internet sur mobile{" "}
                      <span className="text-xl">(2020)</span>
                    </h2>
                    <ul className="list-disc break-words text-sm text-gray-100 px-2 mr-1">
                      <li>
                        92% des utilisateurs de téléphones mobile utilisent
                        internet.
                      </li>
                      <li>
                        91% de l’ensemble des utilisateurs internet se
                        connectent sur le web à partir d’un smartphone.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-10 max-w-xl">
              <div className="bg-white bg-opacity-10 md:shadow-xl rounded-lg border-l-4 border-l-emerald-500">
                <div className="py-1 opacity-100">
                  <div className="p-4">
                    <h2 className="font-bold mb-2 md:mt-4 text-2xl text-gray-100">
                      Le commerce mobile <span className="text-xl">(2020)</span>
                    </h2>

                    <ul className="list-disc break-words text-sm text-gray-100 px-2 mr-1">
                      <li>
                        52% des internautes ont effectué un achat à partir de
                        leur téléphone.
                      </li>
                      <li>
                        50% des revenues eCommerce B2C proviennent de
                        transactions mobiles.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-10 max-w-xl">
              <div className="bg-white bg-opacity-10 md:shadow-xl rounded-lg border-l-4 border-l-amber-500">
                <div className="py-1 opacity-100">
                  <div className="p-4">
                    <h2 className="font-bold mb-2 md:mt-4 text-2xl text-gray-100">
                      Utilisation des systèmes d’exploitations sur mobile
                    </h2>
                    <ul className="list-disc break-words text-sm text-gray-100 px-2 mr-1">
                      <li>
                        74% du trafic internet en 2019 s’est fait à partir d’un
                        appareil Android. C’est une baisse de 1,4% de Dec. 2018
                        à Dec. 2019.
                      </li>
                      <li>
                        25% du trafic internet en 2019 s’est fait à partir d’un
                        appareil iOS. Soit une augmentation de 13% de Dec 2018 à
                        Dec 2019.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
