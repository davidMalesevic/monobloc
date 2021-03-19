import Link from "next/link";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import Delayed from "../components/Delayed";

const images = [
  {
    original: "/images/1.jpg",
    description: "Panton Stuhl von Verner Pantones",
  },
  {
    original: "/images/2.jpg",
    description: "Bofinger-Stuhl von Helmut Bätzner",
  },
  {
    original: "/images/3.jpg",
    description: "Selene Stuhl von Vico Magistretti",
  },
  {
    original: "/images/4.jpg",
    description: "Fauteuil 300 von Henry Massonnet",
  },
  {
    original: "/images/5.jpg",
    description: "Resin Chair von Grosfillex",
  },
  {
    original: "/images/6.jpg",
    description: "111 Navy Chair von Emeco",
  },
  {
    original: "/images/7.jpg",
    description: "Hemp Hhair von Werner Aisslinger",
  },
];

export default function Home() {
  return (
    <div className="h-screen">
      <header className="flex flex-row px-10 fixed">
        <Delayed waitBeforeShow={12000}>
          <h1 className="text-3xl font-mono font-bold">MONOBLOC</h1>
        </Delayed>
      </header>

      <article id="third" className="h-full flex flex-row">
        <p className="z-40 text-white font-mono text-2xl sm:text-6xl absolute top-1/3 left-2/3">
          <CountUp end={234390243} duration={12} separator={"'"} /> Mal<br></br>
          einen Monobloc
        </p>
        <Delayed waitBeforeShow={12000}>
          <div className="z-40 text-white font-sans text-2xl sm:text-4xl hover:underline absolute top-3/4 left-2/3">
            <Link href="/#text">
              <a>Erfahren sie mehr</a>
            </Link>
          </div>
        </Delayed>
        <video autoPlay muted>
          <source src="monobloc.webm" type="video/webm" />
        </video>
      </article>
      <Delayed waitBeforeShow={12000}>
        <article
          id="text"
          className="h-full pt-10 flex flex-col-reverse sm:flex-row"
        >
          <div className="h-6/12 w-full sm:h-full sm:w-6/12 px-10">
            <ImageGallery
              items={images}
              autoPlay={true}
              description={images.description}
              showThumbnails={false}
              showBullets={true}
            />
          </div>
          <div className="h-6/12 w-full sm:h-full sm:w-1/4 px-10">
            <h2 className="text-3xl font-mono text-bold pb-4">
              Ein Stuhl für die ganze Welt
            </h2>
            <p>
              Eine Welt ohne Monobloc ist kaum mehr vorstellbar. Er steht
              weltweit auf Restaurant Terrassen, in Gärten und sonst überall, wo
              man eine günstige Sitzmöglichkeit braucht. Wie viele verschiedene
              Variationen es mittlerweile gibt ist praktisch unmöglich zu sagen.
            </p>
            <p>
              Angefangen hat die Geschichte des Monoblocs in den 1950er Jahren.
              Durch moderne Fertigungsmethoden war es erstmals möglich einen
              Stuhl aus einem Stück Plastik herzustellen. Hier hat der Monobloc
              auch seinen Namen bekommen. Im Spritzgussverfahren wird heisses
              Plastik in eine Form gepresst und fertig ist der Stuhl.{" "}
            </p>
            <p>
              Zu den ersten in Massenproduktion gefertigten Monobloc Stühlen
              gehören der Panton (1958-68) von Verner Panton, der Bofinger
              (1964-68) von Helmut Bätzner und der Selene (1961-68) von Vico
              Magistretti.{" "}
            </p>
            <p>
              Der weisse Plastikstuhl wie wir ihn heute kennen wurde mit dem
              Fauteuil 300 erstmals 1972 vom Designer Henry Massonnet erdacht.
              Seit in den 1980er Jahren die Firma Grosfillex anfing White Resin
              Chair in grossen Mengen zu Produzieren ist die Verbreitung des
              Monoblocs nicht mehr aufzuhalten.{" "}
            </p>
            <p>
              Heute dauert die Herstellung eines Stuhls ca. 2 Minuten und kostet
              3.5 US-Dollar.{" "}
            </p>
            <p>
              So viel Plastik bringt natürlich Probleme mit sich. Monoblocs
              werden nicht nur in Massen hergestellt, sondern auch entsorgt.
              Dadurch entstehen Unmengen an Plastikabfall.{" "}
            </p>
            <p>
              Monobloc geht aber auch nachhaltig, so wird z.b. der Emeco 111
              Navy Chair aus 111 Petflaschen hergestellt. Im Jahr 2012 hat der
              Designer Werner Aisslinger seinen Hemp Chair vorgestellt, ein
              Monobloc aus Hanf.
            </p>
            <p>
              Der Monobloc wird sich weiter ausbreiten, es ist nur zu hoffen,
              dass die Nachhaltigen Varianten möglichst bald überhandnehmen.
            </p>
          </div>
        </article>
      </Delayed>
    </div>
  );
}
