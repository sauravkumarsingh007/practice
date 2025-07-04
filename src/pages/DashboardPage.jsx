import React from 'react';
import { Calendar, Download, PlusCircle, Search, Filter, SortAsc, MoreHorizontal ,Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      <div className="flex flex-wrap justify-between items-center gap-4">

      {/* Left Side */}
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Orders</h2>
      </div>

      {/* Right Side */}
      <div className="flex flex-wrap items-center gap-3">

        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export</span>
        </Button>

        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="More Actions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="edit">Edit</SelectItem>
            <SelectItem value="delete">Delete</SelectItem>
          </SelectContent>
        </Select>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Create Order</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Order</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" placeholder="Enter customer name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" placeholder="Enter email" className="col-span-3" />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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

      <div className="table_filters_container flex flex-wrap justify-between items-center gap-4">

      {/* Left - Tabs */}
      <div>
        <Tabs defaultValue="account" className="w-full sm:w-[400px]">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="Unfullfilled">Unfullfilled</TabsTrigger>
            <TabsTrigger value="Unpaid">Unpaid</TabsTrigger>
            <TabsTrigger value="Open">Open</TabsTrigger>
            <TabsTrigger value="Close">Close</TabsTrigger>
            <TabsTrigger value="Add" className="flex items-center gap-1">
              <PlusCircle className="h-4 w-4" /> Add
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Right - Action Buttons */}
      <div className="flex flex-wrap gap-2 items-center">
        <TooltipProvider>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Search</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Filter</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <SortAsc className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Sort</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>More</TooltipContent>
          </Tooltip>

        </TooltipProvider>
      </div>
    </div>
      <OrdersTable />
    </div>
  );
};

export default DashboardPage;
