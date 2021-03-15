import Link from "next/link";
import ImageGallery from "react-image-gallery";
import Image from "next/image";

const images = [
  { original: "/images/monobloc1.jpg" },
  { original: "/images/monobloc2.jpg" },
  { original: "/images/monobloc3.jpg" },
];

export default function Home() {
  return (
    <div className="h-screen">
      <header className="flex flex-row px-4 fixed">
        <h1 className="text-3xl font-mono font-bold">MONOBLOC</h1>
        <Link href="/#first">
          <a>First</a>
        </Link>
        <Link href="/#second">
          <a>Second</a>
        </Link>
        <Link href="/#third">
          <a>Third</a>
        </Link>
      </header>
      <article id="first" className="h-full bg-red-700 pt-10"></article>
      <article id="second" className="h-full bg-blue-700 pt-10"></article>
      <article id="third" className="h-full pt-10 flex flex-col">
        <div className="h-full w-6/12 px-10">
          <ImageGallery items={images} />
        </div>
        <div className="h-full w-6/12 px-10">
          <h2>
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
