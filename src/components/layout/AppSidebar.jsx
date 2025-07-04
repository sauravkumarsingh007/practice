import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { useEffect, useRef, useState } from 'react';
import AppMenuItems from './AppMenuItems';
import { Home, Settings } from 'lucide-react';

// Menu items with icons
const items = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    isActive: false,
    iconActive: <Home />,
    iconInactive: <Home />,
  },
  {
    title: 'Users',
    url: '#users',
    items: [
      {
        label: 'Active Users',
        link: '/admin/active-users',
        isActive: false,
      },
      {
        label: 'Pending Users',
        link: '/admin/pending-users',
        isActive: false,
      },
      {
        label: 'Rejected Users',
        link: '/admin/rejected-users',
        isActive: false,
      },
      {
        label: 'Leads Users',
        link: '/admin/leads-users',
        isActive: false,
        permissionName: 'locations',
      },
    ],
    isActive: false,
    iconActive: <Home />,
    iconInactive: <Home />,
  },
  {
    title: 'Subscription',
    url: '/admin/subscriptions',
    isActive: false,
    iconActive: <Home />,
    iconInactive: <Home />,
  },
  {
    title: 'Support',
    url: '/admin/supports',
    isActive: false,
    iconActive: <Home />,
    iconInactive: <Home />,
  },
];

export function AppSidebar() {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const elementRef = useRef(null);
  const { state } = useSidebar();

  const handleMouseEnter = () => {
    setIsSidebarHovered(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarHovered(false);
  };

  const [menuItems, setMenuItems] = useState(items);

  const deactivateAllSubMenuItems = () => {
    menuItems.forEach((menu) => {
      if (menu.items && Array.isArray(menu.items)) {
        menu.items.forEach((subItem) => {
          subItem.isActive = false;
        });
      }
    });
  };

  // Set active menu item and update icon
  const setActiveMenu = (parentMenu, childActiveMenuURL = '#') => {
    const parentURL = parentMenu.url;
    // if parent have not child then only set active menu parent
    if (!parentMenu.items && childActiveMenuURL === '#') {
      const updatedItems = menuItems.map((item) => {
        const isActive = item.url === parentURL;
        return {
          ...item,
          isActive,
          icon: isActive ? item.iconActive : item.iconInactive,
        };
      });
      setMenuItems(updatedItems);
    } else {
      // if child and parent need to set active
      const updatedMenuItems = menuItems.map((menu) => {
        if (menu.url === parentURL) {
          // Update the parent menu and its child items
          return {
            ...menu,
            isActive: true,
            items: menu.items.map((item) => ({
              ...item,
              isActive: item.link === childActiveMenuURL,
            })),
          };
        }
        // Return other menus unchanged
        return { ...menu, isActive: false };
      });
      // Update the state with the new array
      setMenuItems(updatedMenuItems);
      deactivateAllSubMenuItems();
    }

    const breadCrumbData = [];
    // find parent menu and child menu name
    const parent = menuItems.find((item) => item.url === parentURL);
    const child = parent.items?.find(
      (item) => item.link === childActiveMenuURL,
    );
    breadCrumbData.push(
      { label: parent?.title },
      { label: child?.label ?? '#' },
    );
  };

  useEffect(() => {
    const locationPath = location.pathname;
    menuItems.map((menu) => {
      if (menu.url === locationPath) {
        setActiveMenu(menu, menu.items || '#');
      }
      return menu;
    });
    // Optionally, update menu items state if required
    // setMenuItems(updatedMenuItems);
  }, []);

  return (
    <Sidebar
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      collapsible="icon"
    >
      <hr className="border-t border-gray-800 opacity-100" />
      <SidebarContent className="bg-gray-50">
        <SidebarGroup>
          <SidebarGroupLabel className="my-4 mt-3 w-fit bg-[#10101c] px-4 py-1.5 text-sm text-white">
            General
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-2">
              {menuItems?.map((item, index) => (
                <AppMenuItems
                  isSidebarHovered={isSidebarHovered}
                  setActiveMenu={setActiveMenu}
                  key={index}
                  item={item}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-gray-50 ">
        <SidebarMenu>
          <SidebarMenuItem className=" flex items-center gap-2">
            <Settings className='w-4' /> <p className='text-[#9e9e9e]'>Settings</p>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
