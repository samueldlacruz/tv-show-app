import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { Icon } from '@tremor/react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Icon color="rose" size="xl" icon={ExclamationCircleIcon} />
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-4xl text-white mb-8">Page not found</p>
        </div>
    );
};

export default NotFoundPage;
