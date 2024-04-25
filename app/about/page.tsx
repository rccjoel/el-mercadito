import Image from 'next/image';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function About() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-16 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600">About us</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story: UnBrewed</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The aroma of freshly roasted coffee beans hung heavy in the crisp Leamington air.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image 
            src="/grower.jpg"
            width={3386}
            height={2029}
            alt="Coffee grower smiling"
            className="w-[38rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                El Mercadito Grab & Go, a vibrant splash of color against the red-brick buildings, was Tatianas dream come true.
                It was not just a coffee shop; it was a bridge between her past and present, a testament to the resilience of
                family and flavor. Every morning, the air crackled with the warm greetings of regulars, a mix of Leamington locals
                and Colombian transplants drawn by the promise of a taste of home.
              </p>
              <p className="mt-8">
                Tatiana's journey to creating El Mercadito was one fueled by passion and perseverance. Born and raised in Colombia, 
                she grew up surrounded by the rich flavors and vibrant colors of her homeland. However, life took her on a journey 
                far from her roots, leading her to Leamington, where she found herself yearning for a taste of home amidst the unfamiliar 
                surroundings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
