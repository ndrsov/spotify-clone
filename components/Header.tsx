'use client';

import { useRouter } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Handle logour in the future
    console.log('Logout');
  };
  return (
    <div
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-800 p-6',
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hiden md:flex gap-x-2 items-center">
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft
              onClick={() => router.back()}
              size={35}
              className="text-white cursor-pointer "
            />
          </button>
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight
              onClick={() => router.forward()}
              size={35}
              className="text-white cursor-pointer "
            />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome
              onClick={() => router.push('/')}
              size={20}
              className="text-black cursor-pointer"
            />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch
              onClick={() => router.push('/')}
              size={20}
              className="text-black cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
