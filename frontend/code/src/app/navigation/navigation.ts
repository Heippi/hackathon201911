import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
  {
    id: "actions",
    title: "Actions",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        icon: "apps",
        url: "/main/dashboard"
      },
      {
        id: "hotels",
        title: "Hotels",
        type: "item",
        icon: "layers",
        url: "/main/hotels"
      }
    ]
  }
];
