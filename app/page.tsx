import Image from "next/image";

const stats = [
  { id: 1, name: 'Mountain-Kissed Colombian Beans Meet Ethiopia Earthy Treasures', value: 'Globally Sourced Beans' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
]

export default function Home() {
    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Fuel Your Day, the <span className="text-green-600">Delicious</span> Way
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Indulge your senses with the aroma of freshly roasted coffee beans and the taste 
                of food crafted with only the finest ingredients.</p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/menu"
                    className="rounded-md bg-green-600 px-16 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
                <div className="-ml-12 -mt-12 p-12 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image 
                        src="/landing-coffee.svg"
                        width={1200}
                        height={400}
                        alt="Test"
                        className="w-[38rem] max-w-none sm:w-[57rem]"
                    />
            </div>
          </div>
          <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-lg font-semibold tracking-tight text-gray-900 sm:text-4xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
    )
}