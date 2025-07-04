import React from 'react';
import { Calendar, Download, Plus, PlusCircleIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatsSlider from '../components/dashboard/slider/StatsSlider';
import OrdersTable from '../components/dashboard/table/OrderTable';

const DashboardPage = () => {
  return (
    <div className="dashboard_container flex max-w-screen flex-col gap-3">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Orders</h2>
        </div>

        {/* Right Side */}
        <div className="mt-2 flex flex-wrap items-center gap-3 sm:mt-0">
          <button className="flex items-center rounded-md border px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
            <Download className="mr-2 h-4 w-4" />
            Export
          </button>

          <div className="relative">
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="More Actions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="edit">Edit</SelectItem>
                <SelectItem value="delete">Delete</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button className="rounded-md bg-purple-600 px-4 py-1.5 text-sm text-white hover:bg-purple-700">
            Create order
          </button>
        </div>
      </div>
      <div className="date_picker">
        {/* Date Picker Mock */}
        <button className="flex items-center rounded-md border px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
          <Calendar className="mr-2 h-4 w-4 text-gray-500" />
          Jan 1 - Jan 30, 2024
        </button>
      </div>
      <StatsSlider />

      <div className="table_filters_container">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="Unfullfilled">Unfullfilled</TabsTrigger>
            <TabsTrigger value="Unpaid">Unpaid</TabsTrigger>
            <TabsTrigger value="Open">Open</TabsTrigger>
            <TabsTrigger value="Close">Close</TabsTrigger>
            <TabsTrigger value="Add">
              <PlusCircleIcon className="h-4 w-4" />
              Add
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="all">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent> */}
        </Tabs>
      </div>
      <OrdersTable />
    </div>
  );
};

export default DashboardPage;
