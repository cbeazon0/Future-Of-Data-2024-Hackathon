import {
  AcademicCapIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Learn What You Can Do With Your Money",
    description:
      "Discover and learn about the different ways you can manage, save, and invest your money. Learn how little steps today can lead to a better financial future.",
    icon: AcademicCapIcon,
  },
  {
    title: "Begin The Process Of Getting Out Of Debt",
    description:
      "Discover ways you can get out of debt and get an understanding of how to manage your debt. Get an understanding of how to get out of debt, stay out of debt, and build a better financial future.",
    icon: CreditCardIcon,
  },
  {
    title: "Start Acting For Your Financial Future",
    description:
      "Discover and test outcomes of different financial decisions. Learn how to make better financial decisions and how to build a better financial future.",
    icon: CurrencyDollarIcon,
  },
];

export const Feature1 = () => {
    return (
      <div id="demo" className="overflow-hidden bg-n-15 py-24 sm:py-32">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-[2.3fr_2.5fr] gap-y-16 sm:gap-y-20">
            <div className="lg:pr-8 lg:pt-4 lg:ml-">
              <div className="lg:max-w-lg mx-auto lg:ml-auto lg:mr-0">
                <h2 className="text=base font-semibold leading-7 text-color-8">
                  Relaxed Finance
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Incredible Stuff
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-n-3 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-6 w-6 text-color-8"
                        />
                        {feature.title}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                alt="Product screenshot"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                className="w-full max-w-[60rem] mx-auto rounded-xl shadow-md shadow-n-4 ring-1 ring-n-3"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
    

export const Feature2 = () => {
  return (
    <div id="benefits" className="bg-n-15 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold tracking-tight text-color-8 sm:text-4xl">
            Understand Your Financial Future
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need To Understand Your Financial Future
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                    <feature.icon
                      aria-hidden="true"
                      className="h-10 w-10 text-color-8"
                    />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-n-3">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
