import { usePathname } from 'next/navigation';

const useIsActiveLink = () => {
  const pathName = usePathname();

  const isActiveLink = (href: string): boolean => {
    return pathName === href;
  };

  return isActiveLink;
};

export default useIsActiveLink;
