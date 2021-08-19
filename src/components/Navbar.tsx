import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ProfileOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  MessageOutlined,
  RocketOutlined,
  ProjectOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item icon={<MenuOutlined />} onClick={() => setVisible(true)} />
        <Menu.Item>Logout</Menu.Item>
      </Menu>
      <Drawer
        title="Student Dashboard"
        placement="left"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Menu style={{ overflow: "hidden" }}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/profile">My Profile</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ProfileOutlined />}>
            <Link to="/openings">Job Openings</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CarryOutOutlined />}>
            <Link to="/applications">Your Applications</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CalendarOutlined />}>
            <Link to="/calender">Calendar</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<RocketOutlined />}>
            <Link to="/stats">Stats</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<MessageOutlined />}>
            <a
              href="https://anciitk.in/contact.html"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </Menu.Item>
          <Menu.Item key="8" icon={<ProjectOutlined />}>
            <Link to="/credits">Credits</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default Navbar;
