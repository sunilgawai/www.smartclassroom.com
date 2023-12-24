// assets
import {
  DashboardOutlined,
  NotificationOutlined,
  ScheduleOutlined,
  MessageOutlined,
  AccountBookOutlined,
  BookOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  DashboardOutlined,
  NotificationOutlined,
  ScheduleOutlined,
  MessageOutlined,
  AccountBookOutlined,
  BookOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const admin = {
  id: "admin-menu",
  title: "Admin",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/admin",
      icon: icons.DashboardOutlined,
      breadcrumbs: true,
    },
    {
      id: "classrooms",
      title: "Classrooms",
      type: "item",
      url: "/admin/classrooms",
      icon: icons.BookOutlined,
      breadcrumbs: true,
    },
    {
      id: "teachers",
      title: "Teachers",
      type: "item",
      url: "/admin/teachers",
      icon: icons.BookOutlined,
      breadcrumbs: true,
    },
    {
      id: "students",
      title: "Students",
      type: "item",
      url: "/admin/students",
      icon: icons.BookOutlined,
      breadcrumbs: true,
    },
    {
      id: "schedules",
      title: "Schedule",
      type: "item",
      url: "/admin/schedules",
      icon: icons.ScheduleOutlined,
      breadcrumbs: true,
    },
    {
      id: "announcements",
      title: "Announcement",
      type: "item",
      url: "/admin/announcements",
      icon: icons.NotificationOutlined,
      breadcrumbs: true,
    },
    {
      id: "study-material",
      title: "Study Material",
      type: "item",
      url: "/admin/study-material",
      icon: icons.AccountBookOutlined,
      breadcrumbs: true,
    },
    {
      id: "Chatroom",
      title: "Chat Room",
      type: "item",
      url: "/admin/chatroom",
      icon: icons.MessageOutlined,
      breadcrumbs: true,
    },
  ],
};

export default admin;
