import React from 'react';
import { Flex, Icon } from "@tremor/react";
import { ExternalLinkIcon } from "@heroicons/react/solid";

const Footer = () => {
  
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <Flex flexDirection="col" className='w-full'>
          Powered by:{' '}
          <a
            href="https://www.episodate.com/api"
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex alignItems="center">
              <span>Episodate API</span>
              <Icon className="inline-block ml-1" size="sm" icon={ExternalLinkIcon} />
            </Flex>
          </a>
        </Flex>
      </div>
    </footer>
  );
};

export default Footer;

