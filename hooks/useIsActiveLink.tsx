import { usePathname } from 'next/navigation';

const useIsActiveLink = () => {
  const pathName: string = usePathname();

  return (href: string): boolean => pathName === href;
};

export default useIsActiveLink;
