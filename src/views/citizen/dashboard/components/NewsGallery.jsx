import React from "react";
import Card from "../../../../components/card";
import banner1 from "../../../../assets/img/nfts/Nft2.png";
import banner2 from "../../../../assets/img/nfts/Nft3.png";
import banner3 from "../../../../assets/img/nfts/Nft3.png";

const newsItems = [
  {
    id: 1,
    title: "AI Changing the World",
    image: banner1,
    description:
      "Explore how artificial intelligence is revolutionizing industries.",
    date: "July 6, 2025",
  },
  {
    id: 2,
    title: "Climate Action Plan 2030",
    image: banner2,
    description: "Governments unite to address climate challenges.",
    date: "July 5, 2025",
  },
  {
    id: 3,
    title: "SpaceX’s Next Launch",
    image: banner3,
    description: "A new milestone in reusable rocket technology.",
    date: "July 4, 2025",
  },
  {
    id: 4,
    title: "SpaceX’s Next Launch",
    image: banner3,
    description: "A new milestone in reusable rocket technology.",
    date: "July 4, 2025",
  },
  {
    id: 5,
    title: "SpaceX’s Next Launch",
    image: banner3,
    description: "A new milestone in reusable rocket technology.",
    date: "July 4, 2025",
  },
];

const NewsGallery = () => {
  return (
    <Card extra="p-6 w-full h-full">
      <h3 className="mb-6 text-xl font-bold text-navy-700 dark:text-white">
        Latest News
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-navy-800"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h4 className="mb-2 text-lg font-semibold text-navy-700 dark:text-white">
                {item.title}
              </h4>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default NewsGallery;
