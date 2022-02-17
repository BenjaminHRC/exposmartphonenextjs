import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-20 py-8 w-full sm:h-10 lg:justify-start bg-gray-900"
      aria-label="Global"
    >
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="/">
            <span className="sr-only">Workflow</span>
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              color="#10b981"
              size="2xl"
            />
          </a>
          <div className="mr-2 flex items-center md:hidden">
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
        <Link href="/main#history">
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

        <Link href="#">
          <a className="font-medium text-emerald-400 hover:text-emerald-200">
            Notez moi
          </a>
        </Link>
      </div>
    </nav>
  );
}
