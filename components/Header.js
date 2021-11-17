import Image from "next/image";

function Header() {
  return (
    <header>
      {/* left */}
      <div className="relative flex items-center h-10">
        <Image
          src="http://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div></div>

      {/* right */}
      <div></div>
    </header>
  );
}

export default Header;
