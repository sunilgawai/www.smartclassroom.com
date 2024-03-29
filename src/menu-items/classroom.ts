// assets
import { DashboardOutlined, NotificationOutlined, ScheduleOutlined, MessageOutlined, AccountBookOutlined, BookOutlined } from "@ant-design/icons";

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

const dashboard = {
  id: "group-classroom",
  title: "Classroom",
  type: "group",
  children: [
    {
      id: "todos",
      title: "Classroom",
      type: "item",
      url: "/classroom",
      icon: icons.BookOutlined,
      breadcrumbs: true,
    },
    {
      id: "schedules",
      title: "Schedule",
      type: "item",
      url: "/classroom/schedules",
      icon: icons.ScheduleOutlined,
      breadcrumbs: true,
    },
    {
      id: "announcements",
      title: "Announcement",
      type: "item",
      url: "/classroom/announcements",
      icon: icons.NotificationOutlined,
      breadcrumbs: true,
    },
    {
      id: "study-material",
      title: "Study Material",
      type: "item",
      url: "/classroom/study-material",
      icon: icons.AccountBookOutlined,
      breadcrumbs: true,
    },
    {
      id: "Chatroom",
      title: "Chat Room",
      type: "item",
      url: "/classroom/chatroom",
      icon: icons.MessageOutlined,
      breadcrumbs: true,
    },
  ],
};

export default dashboard;
