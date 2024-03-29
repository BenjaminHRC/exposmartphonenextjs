import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>USALH</title>
      </Head>
      <section className="relative bg-gray-900 overflow-hidden h-screen">
        <div className="max-w-7xl mx-auto h-full">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 h-full">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <FontAwesomeIcon
                          icon={faMobileScreenButton}
                          color="#10b981"
                          size="2xl"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <button
                          type="button"
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          {/* <!-- Heroicon name: outline/menu --> */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <Link href="/main">
                      <a className="font-medium text-gray-500 hover:text-gray-200">
                        Histoire
                      </a>
                    </Link>

                    <Link href="/main#economie">
                      <a className="font-medium text-gray-500 hover:text-gray-200">
                        Economie
                      </a>
                    </Link>

                    <Link href="/main#environnement">
                      <a className="font-medium text-gray-500 hover:text-gray-200">
                        Environnement
                      </a>
                    </Link>
                  </div>
                </nav>
              </div>

              {/* Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95" */}

              <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <FontAwesomeIcon
                        icon={faMobileScreenButton}
                        color="#10b981"
                        size="2xl"
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close main menu</span>
                        {/* <!-- Heroicon name: outline/x --> */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="#">
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-200 hover:bg-gray-50">
                        Product
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-200 hover:bg-gray-50">
                        Features
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-200 hover:bg-gray-50">
                        Marketplace
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-200 hover:bg-gray-50">
                        Company
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-7xl">
                  {" "}
                  USAL3H
                </h1>
                <br />
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                  <span className="block xl:block">Les smartphones </span>
                  <span className="block xl:block">{"et l'impact"}</span>
                  <span className="block text-emerald-500 xl:block">
                    environemental
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Quelles sont les réels conséquences des smartphones sur la
                  planète ?
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/main">
                      <a className="w-full flex items-center justify-around px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-400 md:py-4 md:text-lg md:px-10">
                        <span className="px-2">En savoir plus </span>
                        <FontAwesomeIcon
                          icon={faArrowRightLong}
                          className="px-2"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:fixed lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/bg_forest.jpg"
            alt=""
            title=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </>
  );
}
