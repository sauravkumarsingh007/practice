import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const AppMenuItems = ({ key, isSidebarHovered, item, setActiveMenu }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { state } = useSidebar();

  const handleMenuButtonClick = (event, item) => {
    event.stopPropagation();
    setSubMenuOpen(false);
    if (state == 'collapsed') {
      setSubMenuOpen(true);
    }
    if (!item.items) {
      setActiveMenu(item);
    }
  };

  useEffect(() => {
    if (state == 'collapsed' && !isSidebarHovered) {
      setSubMenuOpen(false);
    }
  }, [state, isSidebarHovered]);

  return (
    <Collapsible
      open={subMenuOpen}
      onOpenChange={setSubMenuOpen}
      key={item.title}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            onClick={(event) => handleMenuButtonClick(event, item)}
            className={`${
              item.isActive ? 'bg-transparent text-white' : 'text-[#9fa8c1]'
            } flex items-center justify-between`}
            asChild
            isActive={item.isActive}
          >
            {item.items ? (
              <span className="relative flex w-full cursor-pointer items-center justify-between select-none">
                <div
                  onMouseEnter={() => setHoveredIndex(key)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="left_menu flex w-full items-center justify-start gap-3 py-5 text-sm"
                >
                  <Tooltip>
                    <TooltipTrigger>
                      {/* <img
                        className={`relative z-50 h-[18px] w-[18px] ${item.iconActive} `}
                        src={
                          hoveredIndex === key
                            ? item.iconActive
                            : item.isActive
                            ? item.iconActive
                            : item.iconInactive
                        }
                        alt={item.title}
                      /> */}
                      {item.iconActive}
                    </TooltipTrigger>
                    {state == 'collapsed' && (
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    )}
                  </Tooltip>
                  <span
                    className={`${subMenuOpen} absolute left-9 text-sm font-medium whitespace-nowrap`}
                  >
                    {item.title}
                  </span>
                </div>
                {item.items &&
                  (subMenuOpen ? (
                    <ChevronDown className="absolute left-[215px]" />
                  ) : (
                    <ChevronRight className="absolute left-[215px]" />
                  ))}
              </span>
            ) : (
              <Link
                to={item.url}
                onMouseEnter={() => setHoveredIndex(key)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex w-full items-center justify-between"
              >
                <div className="left_menu flex w-full items-center justify-start gap-3 py-5 text-sm">
                  <Tooltip>
                    <TooltipTrigger>
                      {/* <img
                        className={`relative z-50 h-[18px] w-[18px] cursor-pointer`}
                        src={
                          hoveredIndex === key
                            ? item.iconActive
                            : item.isActive
                            ? item.iconActive
                            : item.iconInactive
                        }
                        alt={item.title}
                      /> */}
                      {item.iconActive}
                    </TooltipTrigger>
                    {state == 'collapsed' && (
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    )}
                  </Tooltip>
                  <span
                    className={`absolute left-9 text-sm font-medium whitespace-nowrap`}
                  >
                    {item.title}
                  </span>
                </div>
                {item.items &&
                  (subMenuOpen ? (
                    <ChevronDown className="absolute left-[215px]" />
                  ) : (
                    <ChevronRight className="absolute left-[215px]" />
                  ))}
              </Link>
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className={`${item.items ? 'block' : 'hidden'} `}>
          <SidebarMenuSub className="my-2 gap-3">
            {item.items?.map((items, subIndex) => (
              <SidebarMenuSubItem
                onClick={() => setActiveMenu(item, items.link)}
                key={subIndex}
              >
                <Link
                  to={items.link}
                  className={`relative right-0 flex gap-1.5 ${
                    items.isActive ? 'text-white' : 'text-[#9fa8c1]'
                  } items-center justify-start text-sm font-medium text-[#9fa8c1] transition-all duration-200 ease-in hover:right-[3px] hover:text-white`}
                >
                  <div className="h-[1px] w-[14px] bg-[#9fa8c1]"></div>
                  <span>{items.label}</span>
                </Link>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

export default AppMenuItems;
