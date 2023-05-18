import { ITVShow } from '@/interfaces/TVShow';
import Link from 'next/link';
import { useState } from 'react';

const TvShowCard = ({ tvShow }: { tvShow: ITVShow }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="max-w-md w-full relative h-full mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={tvShow.image_thumbnail_path}
        alt={tvShow.name}
        className="h-2/3 object-cover w-full bg-top"
      />
      <div className="p-4">
        {isHovered && (
          <Link href={`/tv-show/${tvShow.id}`}>
            <div className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">See details</p>
            </div>
          </Link>
        )}
        <h3 className="text-xl text-white font-medium mb-2">{tvShow.name}</h3>
        <p className="text-gray-600 mb-2">{tvShow.network}</p>
      </div>
    </div>
  );
};

export default TvShowCard;
