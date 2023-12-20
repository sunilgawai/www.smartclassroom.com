// assets
import { DashboardOutlined } from "@ant-design/icons";

// icons
const icons = {
  DashboardOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: "group-classroom",
  title: "Classroom",
  type: "group",
  children: [
    {
      id: "todos",
      title: "To-do",
      type: "item",
      url: "/classroom/todos",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "schedules",
      title: "Schedule",
      type: "item",
      url: "/classroom/schedules",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "announcements",
      title: "Announcement",
      type: "item",
      url: "/classroom/announcements",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/classroom/study-material",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
    {
      id: "to-me",
      title: "To me",
      type: "item",
      url: "/classroom/to-me",
      icon: icons.DashboardOutlined,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
