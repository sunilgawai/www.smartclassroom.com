// assets
import { DashboardOutlined,DatabaseOutlined, } from '@ant-design/icons';

// icons
const icons = {
  DatabaseOutlined,
};

// ==============================|| MENU ITEMS - SUBJECT ||============================== //

const subjects = {
  id: "group-subjects",
  title: "Subject",
  type: "group",
  children: [
    {
      id: "Java",
      title: "Java",
      type: "item",
      url: "/subjects/java",
      icon: icons.DatabaseOutlined,
      breadcrumbs: false,
    },
    {
      id: "OS",
      title: "Operating System",
      type: "item",
      url: "/subjects/os",
      icon: icons.DatabaseOutlined,
      breadcrumbs: false,
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      type: "item",
      url: "/subjects/dsa",
      icon: icons.DatabaseOutlined,
      breadcrumbs: false,
    },
    {
      id: "networking",
      title: "Networking",
      type: "item",
      url: "/subjects/networking",
      icon: icons.DatabaseOutlined,
      breadcrumbs: false,
    },
    {
      id: "se",
      title: "Software Engineering",
      type: "item",
      url: "/subjects/se",
      icon: icons.DatabaseOutlined,
      breadcrumbs: false,
    },
  ],
};

export default subjects;
