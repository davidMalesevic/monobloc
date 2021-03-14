import Link from "next/link";

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
      </header>
      <article id="first" className="h-full bg-red-700 pt-10">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </article>
      <article id="second" className="h-full bg-blue-700 pt-10"></article>
    </div>
  );
}
