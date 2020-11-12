import Link from 'next/link';

const Menu = () => (
  <div className="mb-4 flex flex-wrap space-x-2">
    <Link href="/">
      <a className="hover:underline hover:text-blue-800">Basic example</a>
    </Link>
    <Link href="/editor">
      <a className="hover:underline hover:text-blue-800">Position setup</a>
    </Link>
    <Link href="/legal">
      <a className="hover:underline hover:text-blue-800">Legal moves only</a>
    </Link>
  </div>
);

export default Menu;
