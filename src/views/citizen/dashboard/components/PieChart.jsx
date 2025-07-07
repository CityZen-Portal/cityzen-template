import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "../../../../variables/charts";
import Card from "components/card";

const updatedPieChartData = [1200000, 850000, 300000];
const updatedPieChartOptions = {
  ...pieChartOptions,
  labels: ["New York", "Los Angeles", "Chicago"],
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
};

const PieChartCard = () => {
  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Population Distribution
          </h4>
        </div>
        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <PieChart
          options={updatedPieChartOptions}
          series={updatedPieChartData}
        />
      </div>

      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#4318FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">New York</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            1,200,000
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">
              Los Angeles
            </p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            850,000
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#EFF4FB]" />
            <p className="ml-1 text-sm font-normal text-gray-600">Chicago</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            300,000
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PieChartCard;
