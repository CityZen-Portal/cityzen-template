import { useState } from "react";
import Card from "components/card";

const HelpCard = ({ title, description, Icon }) => {
  const [heart, setHeart] = useState(true);
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white`}
    >
      <div className="h-full w-full text-center flex items-center justify-center p-3">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="inline-flex items-center justify-center rounded-full bg-purple-100 shadow-lg shadow-purple-300 p-5">
            <Icon className="text-3xl text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-navy-700 dark:text-white">{title}</h2>
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">{description}</p>
        </div>
        
      </div>
    </Card>
  );
};

export default HelpCard;
