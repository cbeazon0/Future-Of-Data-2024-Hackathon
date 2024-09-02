import {
  AcademicCapIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon,
  PencilIcon,
  LockOpenIcon
} from "@heroicons/react/24/outline";

const demo_elements = [
  {
    title: "Get Started With Ease",
    description:
      "Fill out our brief form to get started. This will help us tailor our services to your needs.",
    icon: PencilIcon,
  },
  {
    title: "Unlock Valuable Resources",
    description:
      "Access helpful guides, tips, and articles designed to enhance your financial knowledge and decision-making.",
    icon: LockOpenIcon,
  },
  {
    title: "Own Your Financial Data",
    description:
      "We store nothing on our servers. Your financial data remains entirely yours, ensuring complete privacy and security.",
    icon: ComputerDesktopIcon,
  },
];

const benefit_elements = [
  {
    title: "Master Your Budgeting Skills",
    description:
      "Learn essential budgeting techniques to take control of your finances and achieve your financial goals. Explore practical strategies for planning, tracking expenses, and making wise spending decisions to build a secure financial future.",
    icon: AcademicCapIcon,
  },
  {
    title: "Embark on Your Debt-Free Journey",
    description:
      "Discover proven strategies for managing and eliminating debt while paving the way toward financial health. Gain insights on effective debt pay-off and creating a sustainable plan for long-term success.",
    icon: CreditCardIcon,
  },
  {
    title: "Secure Your Retirement Through Investing",
    description:
      "Explore proven investment strategies tailored to grow your retirement savings and achieve long-term financial security. Learn how to make informed investment choices, manage risk, and build a robust portfolio to support a comfortable and worry-free retirement.",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Start Acting For Your Financial Future",
    description:
      "Discover comprehensive strategies to budget effectively, manage debt, and invest wisely, all aimed at building a secure and prosperous financial future. Learn how to create a balanced approach to your finances that supports your long-term goals and ensures financial stability.",
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
{/*}                <h2 className="text=base font-semibold leading-7 text-color-8">
                  Relaxed Finance
                </h2>
                */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-color-8 sm:text-4xl">
                  Empower Your Wealth
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                Master money management, explore investment strategies, and pursue financial growth. 
                Conquer challenges and make informed decisions to secure a prosperous future.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-n-3 lg:max-w-none">
                  {demo_elements.map((feature) => (
                    <div key={feature.title} className="relative pl-9">
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
            {benefit_elements.map((feature) => (
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
