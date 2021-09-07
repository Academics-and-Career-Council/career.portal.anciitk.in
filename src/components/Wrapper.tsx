import { useState } from "react";
import { Layout, Typography, Menu, Space, Button, BackTop } from "antd";
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  ProfileOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  MessageOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { SESSION_STATE } from "../store";
import logout from "../services/logout";
import logo from "../assets/img/logo192.png";
import "../styles/wrapper.css";

const { Header, Sider, Content } = Layout;

const Wrapper = ({ component }: { component: JSX.Element }) => {
  const pathsToKey: any = {
    dashboard: 1,
    profile: 2,
    openings: 3,
    applications: 4,
    calender: 5,
    contact: 6,
  };
  const [collapsed, setCollapsed] = useState(true);
  const [{ logoutUrl }, setSession] = useRecoilState(SESSION_STATE);

  const path = window.location.pathname.split("/")[1];
  const key = pathsToKey[path].toString();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <Space align="end">
          <img src={logo} alt="anc logo" style={{ height: "50px" }} />
          <Typography.Title
            level={4}
            style={{
              color: "white",
              margin: 0,
              lineHeight: "0.95",
              marginBottom: "5px",
            }}
          >
            CAREER
            <br />
            PORTAL
          </Typography.Title>
        </Space>

        <Space>
          <Button type="ghost" style={{ color: "white" }}>
            Change Password
          </Button>
          <Button
            type="ghost"
            style={{ color: "white" }}
            onClick={() => logout(logoutUrl, setSession)}
          >
            Logout
          </Button>
        </Space>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsible
          collapsed={collapsed}
          onCollapse={(collapsed: boolean) => setCollapsed(collapsed)}
          width={210}
          style={{ position: "sticky", top: "80px", left: "0" }}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={[key]}
            style={{ position: "sticky", top: "80px", left: "0" }}
          >
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
            <Menu.Item key="6" icon={<MessageOutlined />}>
              <a
                href="https://anciitk.in/contact.html"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{
            margin: "30px 30px 0 30px",
            backgroundColor: "#fff",
            paddingBottom: "50px",
          }}
        >
          {component}
          <BackTop>
            <div className="backTop">
              <UpCircleOutlined />
            </div>
          </BackTop>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Wrapper;
