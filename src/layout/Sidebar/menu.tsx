import { sidebarMenuType } from "Types/LayoutDataType";

export const MenuList: sidebarMenuType[] = [
  {
    title: "General",
    menucontent: "General",
    Items: [
      
      {
        title: "Sample Page",
        icon: "sample-page",
        id: 28,
        type: "sub",
        pathSlice: "general",
        active: false,
        children: [
          { path: "/sample-page", title: "Sample Page", type: "link" },
        ],
      },
      {
        id: 33,
        path: "/support_ticket",
        icon: "support-tickets",
        type: "link",
        active: false,
        title: "Support Ticket",
      },
    ],
  },
];
