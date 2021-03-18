import Link from "next/link";
import ImageGallery from "react-image-gallery";
import Image from "next/image";

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
        <h1 className="text-3xl font-mono font-bold">MONOBLOC</h1>
      </header>

      <article id="third" className="h-full flex flex-row">
        <video className="w-full" autoPlay muted>
          <source src="monobloc.webm" type="video/webm" />
        </video>
      </article>
      <article id="third" className="h-full pt-10 flex flex-row">
        <div className="h-full w-6/12 px-10">
          <ImageGallery
            items={images}
            autoPlay={true}
            description={images.description}
            showThumbnails={false}
            showBullets={true}
          />
        </div>
        <div className="h-full w-6/12 px-10">
          <h2 className="text-3xl font-sans">
            Alleine in Italien werden jährlich ca. 10 Millionen Monobloc Stühle
            hergestellt.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </article>
    </div>
  );
}
