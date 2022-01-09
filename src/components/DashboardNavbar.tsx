import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Menu, Button, Space } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  MessageOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { SESSION_STATE } from "../store";
import logout from "../services/logout";

const DashboardNavbar = () => {
  const [visible, setVisible] = useState(false);
  const [session, setSession] = useRecoilState(SESSION_STATE);

  return (
    <>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Menu.Item icon={<MenuOutlined />} onClick={() => setVisible(true)} />
        <Space size="small" style={{ justifyContent: "end" }}>
          <Menu.Item>
            <Button type="ghost" style={{ color: "white" }}>
              <a href={process.env.REACT_APP_LOGIN_URL}>Accounts</a>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button
              type="ghost"
              onClick={() => logout(session?.logoutUrl || "", setSession)}
              style={{ color: "white" }}
            >
              Logout
            </Button>
          </Menu.Item>
        </Space>
      </Menu>
      <Drawer
        title="Student Dashboard"
        placement="left"
        closable={true}
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
          <Menu.Item key="7" icon={<MessageOutlined />}>
            <a
              href="https://anciitk.in/contact.html"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default DashboardNavbar;
