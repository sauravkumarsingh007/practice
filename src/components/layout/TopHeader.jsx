import { Search, Bell } from 'lucide-react';
import { SidebarTrigger } from '../ui/sidebar';

export default function TopHeader() {
  return (
    <div className="flex items-center justify-between border-b bg-white p-4">
      {/* Search Box */}
      <div className="input_container flex">
        <div className="trigger_button mr-3">
          <SidebarTrigger className="" />
        </div>

        <div className="flex w-full max-w-xs items-center gap-3 rounded-lg border px-2 py-1">
          <Search className="mr-2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search or type command..."
            className="flex-1 text-sm placeholder-gray-400 outline-none"
          />
          <span className="ml-2 text-xs text-gray-500">⌘ /</span>
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="ml-4 flex items-center gap-4">
        <Bell className="h-5 w-5 cursor-pointer text-gray-600" />
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
