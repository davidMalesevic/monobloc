import Link from "next/link";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import Delayed from "../components/Delayed";

const images = [
  {
    original: "/images/monobloc1.jpg",
    description: "Panton Stuhl von Verner Pantones",
  },
  { original: "/images/monobloc2.jpg", description: "a chair" },
  { original: "/images/monobloc3.jpg", description: "a chair" },
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </article>
      </Delayed>
    </div>
  );
}
