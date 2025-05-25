import { sidebarMenuType } from "Types/LayoutDataType";

export const MenuList: sidebarMenuType[] = [
  {
    title: "Dashboard",
    menucontent: "Dashboards",
    Items: [
      {
        title: "Dashboard",
        id: 1,
        pathSlice: "dashboard",
        badge: "badge badge-light-primary",
        badgetxt: "3",
        icon: "home",
        type: "sub",
        roles: ["X", "1", "2", "3"],
        children: [
          {
            path: "v3/next/dashboard/kl",
            title: "Kementerian/ Lembaga",
            type: "link",
          },
          {
            path: "v3/next/dashboard/bansos",
            title: "Bansos",
            type: "link",
          },
          {
            path: "v3/next/dashboard/mbg",
            title: "Makan Bergizi",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    title: "Profile",
    menucontent: "Profile",
    Items: [
      {
        title: "Profile",
        id: 2,
        pathSlice: "profile",
        badge: "badge badge-light-primary",
        badgetxt: "3",
        icon: "project",
        type: "sub",
        roles: ["X", "1", "2", "3"],
        children: [
          {
            path: "v3/next/profile/kinerja-kl",
            title: "Kinerja K/L",
            type: "link",
          },
          {
            path: "v3/next/profile/clustering",
            title: "Clustering",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    title: "EPA",
    menucontent: "EPA",
    Items: [
      {
        title: "EPA",
        id: 3,
        pathSlice: "epa",
        badge: "badge badge-light-primary",
        badgetxt: "3",
        icon: "form",
        type: "sub",
        roles: ["X", "1", "2", "3"],
        children: [
          {
            path: "v3/next/profile/kinerja-kl",
            title: "Summary",
            type: "link",
          },
          {
            path: "v3/next/profile/clustering",
            title: "Analisa",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    title: "Inquiry Data",
    menucontent: "Inquiry",
    Items: [
      {
        title: "Inquiry",
        id: 4,
        pathSlice: "inquiry",
        badge: "badge badge-light-primary",
        badgetxt: "3",
        icon: "form",
        type: "sub",
        roles: ["X", "1", "2", "3"],
        children: [
          { path: "v3/data/form/belanja", title: "Belanja", type: "link" },
          { path: "/v3/data/form/tematik", title: "Tematik", type: "link" },
          { path: "v3/data/form/kontrak", title: "Kontrak", type: "link" },
          { path: "v3/data/form/uptup", title: "UP/ TUP", type: "link" },
          { path: "v3/data/form/bansos", title: "Bansos", type: "link" },
          { path: "v3/data/form/deviasi", title: "Deviasi", type: "link" },
          { path: "v3/data/form/rkakl", title: "RKAKL Detail", type: "link" },
          {
            path: "v3/data/form/penerimaan",
            title: "Penerimaan PNBP",
            type: "link",
          },
          { path: "v3/data/form/revisi", title: "Revisi DIPA", type: "link" },
        ],
      },
    ],
  },
];
