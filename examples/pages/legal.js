import { Legal } from 'next-chessground';
import { Menu } from '../components';

const Page = () => (
  <main className="min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <h2 className="font-bold text-2xl mb-4">Legal moves only</h2>
      <Menu />
      <Legal />
    </div>
  </main>
);

export default Page;
