'use client';

import { useRouter } from 'next/router';
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
        'h-fit bg-gradient-to-b from-emerald-800 to-emerald-600 p-6'
      )}
    >
      Header1
    </div>
  );
};

export default Header;
