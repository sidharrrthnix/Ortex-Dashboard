/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { timeConverter } from "../../../lib/functions/timeConverter";
import { usePrevPrice } from "../../../lib/hooks/usePrice";
import { stats } from "../../../lib/utils/stats";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

//Prop price is from the Parent component. it is used to calculate the percentage
// difference between current price value and previous price value
// Prop time  gives the local time zone
// when the websocket connection goes down it  takes prop from lib/utils/stats
interface IProps {
  price: number;
  time: string;
}
const Stats: React.FC<IProps> = ({ price, time }) => {
  let [prevPrice, percentage] = usePrevPrice(price);
  console.log(time);
  return (
    <div>
      <h2 className="text-xl  text-theme leading-6 font-bold">
        <span className="text-4xl">C</span>urrency{" "}
        <span className="text-4xl">X</span>change
      </h2>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white hover:bg-gray-100 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-lighttheme rounded-md p-2">
                <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {(typeof price === "number" && price) || item.price}
              </p>
              <p
                className={classNames(
                  (typeof percentage === "number" && percentage) ||
                    item.difference > 0
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {(percentage && percentage) || item.difference > 0 ? (
                  <ArrowSmUpIcon
                    className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}
                {percentage ? percentage : item.difference}%
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <div className="font-bold text-theme hover:text-lighttheme">
                    {" "}
                    <span className="">
                      {" "}
                      {(typeof time === "string" && time) || "fetching data..."}
                    </span>
                  </div>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Stats;
