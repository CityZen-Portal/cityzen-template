import React from "react";
import brandLogo from "../../../assets/img/nfts/Nft3.png";
import NewsGallery from "./components/NewsGallery.jsx";
import PieChartCard from "./components/PieChart";

const Dashboard = () => {
  return (
    <div>
      <div
        className="flex min-h-[100px] w-full flex-col rounded-2xl 
             border border-white/30 bg-white/20 px-8 
             py-8 backdrop-blur-md md:min-h-[300px] md:px-16 md:py-14"
        style={{
          backgroundImage: `url(${brandLogo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full">
          <h4 className="mb-[14px] max-w-full   text-white md:w-[64%] md:text-4xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
            Welcome{" "}
            <span className=" gap-1">
              <span className="ms-3 font-extrabold">CITY</span>
              <span className="ms-3">ZEN</span>
            </span>
          </h4>
          <p className="font-xl mb-[40px] max-w-full text-base font-semibold text-[#E3DAFF] md:w-[64%] lg:w-[60%] xl:w-[82%] 2xl:w-[80%] 3xl:w-[45%]">
            Coimbatore also known as Kovai is a major city in the Indian state
            of Tamil Nadu. Located on the banks of the Noyyal River surrounded
            by the Western Ghats, it is the second largest city in the state
            after Chennai and 16th largest urban agglomeration in India. It is
            the largest city in the Kongunadu region. It is administered by the
            Coimbatore Municipal Corporation and is the administrative capital
            of Coimbatore district.
          </p>

          <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
            <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
              Explore Now
            </button>
            <button
              href=" "
              className="text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2"
            ></button>
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-5">
        <NewsGallery />
      </div>
      <div className="mt-3 md:mt-5">
        <PieChartCard />
      </div>
    </div>
  );
};

export default Dashboard;
