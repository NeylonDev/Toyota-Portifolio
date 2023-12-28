import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative flex justify-between p-3 items-center ">
      <img src="/images/effects.png" className="absolute z-10 " />
      <img src="/images/logo.png" className="z-20" />
      <ul className="flex gap-5 p-5">
        <li>
          <Link href="/">inicio</Link>
        </li>
        <li>
          <Link href="/modelos">modelos</Link>
        </li>
        <li>
          <Link href="/financiamentos">financiamentos</Link>
        </li>
        <li>
          <Link href="/sobre">sobre nós</Link>
        </li>
        <li>
          <Link href="/contatos">contatos</Link>
        </li>
      </ul>
    </div>
  );
}