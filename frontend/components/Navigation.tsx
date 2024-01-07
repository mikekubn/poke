'use client';
import { Menu } from '@headlessui/react';
import { Bars3Icon, HeartIcon, HomeIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navigation = [
  { name: 'Homepage', route: '/', icon: <HomeIcon className="w-8 h-8" /> },
  { name: 'Favourite', route: '/favourite', icon: <HeartIcon className="w-8 h-8" /> },
];

const Navigation = (): React.ReactElement => {
  const pathname = usePathname();
  const getActivePathname = (route: string): boolean => pathname === route;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-slate-100 shadow-lg">
        <div className="flex flex-col p-2">
          {navigation.map((item, index) => (
            <Menu.Item
              as="div"
              key={index}
              className="group inline-flex items-center gap-2 hover:cursor-pointer hover:opacity-70"
            >
              {({ active }): React.ReactElement => (
                <>
                  <span
                    className={clsx('w-8 h-8', {
                      'text-blue-400': getActivePathname(item.route),
                    })}
                  >
                    {item.icon}
                  </span>
                  <Link
                    href={item.route}
                    className={clsx('group-hover:underline-offset-2 group-hover:underline', {
                      'underline-offset-2 underline': active,
                      'underline-offset-2 underline text-blue-400': getActivePathname(item.route),
                    })}
                  >
                    {item.name}
                  </Link>
                </>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};
export default Navigation;
