import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function StatsSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (direction === 'left') container.scrollLeft -= 300;
    else container.scrollLeft += 300;
  };

  const stats = [
    {
      title: 'Total Orders',
      value: 21,
      change: '25.2%',
      positive: true,
      color: 'text-yellow-500',
    },
    {
      title: 'Order items over time',
      value: 15,
      change: '18.2%',
      positive: true,
      color: 'text-blue-400',
    },
    {
      title: 'Returns Orders',
      value: 0,
      change: '1.2%',
      positive: false,
      color: 'text-red-500',
    },
    {
      title: 'Fulfilled orders over time',
      value: 12,
      change: '12.2%',
      positive: true,
      color: 'text-green-500',
    },
    {
      title: 'Pending Orders',
      value: 5,
      change: '5.4%',
      positive: false,
      color: 'text-orange-400',
    },
    {
      title: 'Cancelled Orders',
      value: 3,
      change: '3.1%',
      positive: false,
      color: 'text-rose-500',
    },
    {
      title: 'Shipped Orders',
      value: 17,
      change: '9.8%',
      positive: true,
      color: 'text-cyan-500',
    },
    {
      title: 'New Customers',
      value: 8,
      change: '14.5%',
      positive: true,
      color: 'text-violet-500',
    },
    {
      title: 'Repeat Customers',
      value: 4,
      change: '7.2%',
      positive: true,
      color: 'text-emerald-500',
    },
    {
      title: 'Revenue Growth',
      value: 20,
      change: '11.9%',
      positive: true,
      color: 'text-pink-500',
    },
  ];

  return (
    <div className="relative">
      {/* Prev Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full border bg-white p-1 shadow hover:bg-gray-50"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Cards Container */}
      <div
        ref={sliderRef}
        className="scrollbar-hide flex space-x-4 overflow-x-auto px-8 py-4"
        style={{
          maxWidth: '100%',
          overflowY: 'hidden',
          scrollbarWidth: 'none' /* Firefox */,
          msOverflowStyle: 'none' /* IE and Edge */,
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex min-w-[200px] flex-col justify-between rounded-lg border bg-white p-4 shadow-sm"
          >
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
            <div className="my-2 text-2xl font-semibold text-gray-900">
              {stat.value} -
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <span
                className={`${stat.positive ? 'text-green-600' : 'text-red-600'} mr-1`}
              >
                {stat.positive ? '▲' : '▼'} {stat.change}
              </span>
              last week
            </div>
            <div
              className={`mt-3 h-1 rounded ${stat.color} bg-opacity-50`}
            ></div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full border bg-white p-1 shadow hover:bg-gray-50"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
