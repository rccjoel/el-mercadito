import Link from "next/link"

const products = [
    {
      id: 1,
      name: 'Americano',
      type: 'coffee-h',
      href: '#',
      price: '$3.75',
      imageSrc: '/drinks/americano.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Latte',
      type: 'coffee-h',
      href: '#',
      price: '$4.50',
      imageSrc: '/drinks/latte.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Cappuccino',
      type: 'coffee-h',
      href: '#',
      price: '$4.50',
      imageSrc: '/drinks/cappuccino.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Espresso',
      type: 'coffee-h',
      href: '#',
      price: '$3.00',
      imageSrc: '/drinks/espresso.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Iced Latte',
      type: 'coffee-c',
      href: '#',
      price: '$5.00',
      imageSrc: '/drinks/iced-latte.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Iced Cappuccino',
      type: 'coffee-c',
      href: '#',
      price: '$5.00',
      imageSrc: '/drinks/iced-cappuccino.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Lemonade',
      type: 'others',
      href: '#',
      price: '$4.50',
      imageSrc: '/drinks/lemonade.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'Mango Shake',
      type: 'others',
      href: '#',
      price: '$6.50',
      imageSrc: '/drinks/mango-shake.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 9,
      name: 'Flat White',
      type: 'coffee-h',
      href: '#',
      price: '$4.50',
      imageSrc: '/drinks/flat-white.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }
  ]

const categories = [
  {
    category: 'Hot Coffee',
    tag: 'coffee-h'
  },
  {
    category: 'Cold Coffee',
    tag: 'coffee-c'
  },
  {
    category: 'Other',
    tag: 'others'
  }
]
  
export default function Coffee() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-3 py-4">
        <h2 className="sr-only">Products</h2>

        {categories.map((x) => (
          <div className="pb-8" key={x.tag}>
            <h1 className="font-bold text-2xl pb-4 border-b">{x.category}</h1>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 py-6">
              {products.filter(product => product.type === x.tag).map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
