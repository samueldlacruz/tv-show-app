import Search from '@/components/Search';
import { Flex } from '@tremor/react';
import Link from 'next/link';

const Header = ({ hiddenSearch = false }: { hiddenSearch?: boolean }) => (
    <header className="bg-gray-900 text-white py-4 fixed w-full z-10">
        <div className="container px-3 mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">
                <Link href="/">
                    <Flex className="gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <span>TV Show</span>
                    </Flex>
                </Link>
            </h1>
            <div className="flex items-center">
              {!hiddenSearch &&  <Search />}
            </div>
        </div>
    </header>
);

export default Header;
