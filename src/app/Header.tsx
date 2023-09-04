import Image from "next/image";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="flex flex-col items-center p-4">
      <Image
        src={logo}
        alt="BCSS Logo"
        width={48}
        height={48}
        priority
        className="h-32 w-32"
      />
      <h1 className="text-center text-3xl font-extrabold">
        Bath Computer Science Society
      </h1>
    </header>
  );
}
