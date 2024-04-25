import Footer from "@/app/ui/footer"

const positions = [
    {
      name: 'Barista',
      duty: 'Responsible for crafting and serving high-quality coffee beverages.',
      location: 'Leamington Branch',
      imageUrl:
        '/coffee-bean.svg',
      lastSeen: '5 days ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Head Cook',
      duty: 'Overseeing all aspects of food preparation and lead the kitchen staff.',
      location: 'Leamington Branch',
      imageUrl:
        '/cook.svg',
      lastSeen: '12 days ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
  ]
  
  export default function Roles() {
    return (
      <div className="px-4">
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Open Positions
        </p>
        <ul role="list" className="divide-y divide-gray-100">
            {positions.map((role) => (
            <li key={role.duty} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={role.imageUrl} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{role.name}</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">{role.duty}</p>
                </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{role.location}</p>
                {role.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                        Posted <time dateTime={role.lastSeenDateTime}>{role.lastSeen}</time>
                    </p>
                ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                )}
                </div>
            </li>
            ))}
        </ul>
        <Footer />
      </div>
      </div>
    )
  }
  