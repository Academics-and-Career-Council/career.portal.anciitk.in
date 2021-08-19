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
  RocketOutlined,
  ProjectOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import "../styles/wrapper.css";

const { Header, Footer, Sider, Content } = Layout;

const Wrapper = ({ component }: { component: JSX.Element }) => {
  const pathsToKey: any = {
    dashboard: 1,
    profile: 2,
    openings: 3,
    applications: 4,
    calender: 5,
    stats: 6,
    contact: 7,
    credits: 8,
  };
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = (collapsed: boolean) => setCollapsed(collapsed);

  const path = window.location.pathname.split("/")[1];
  const key = pathsToKey[path].toString();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          position: "sticky",
          top: 0,
          left: 0,
        }}
        width={210}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={[key]}
          style={{ position: "sticky", top: 0, left: 0 }}
        >
          {!collapsed ? (
            <div>
              <Typography.Title
                level={3}
                style={{
                  color: "white",
                  marginTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                Student Dashboard
              </Typography.Title>
              <hr style={{ width: "90%", marginBottom: "20px" }} />
            </div>
          ) : (
            <div style={{ height: "59px" }}></div>
          )}
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
      </Sider>
      <Layout>
        <Header className="header">
          <Typography.Title
            level={3}
            style={{
              color: "white",
              margin: "auto 0",
              float: "left",
              zIndex: 100,
            }}
          >
            Welcome
          </Typography.Title>
          <Space>
            <Button type="ghost" style={{ color: "white" }}>
              Change Password
            </Button>
            <Button type="ghost" style={{ color: "white" }}>
              Logout
            </Button>
          </Space>
        </Header>
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
        <Footer style={{ textAlign: "center" }}>
          Made with <span style={{ color: "#e25555" }}>&#9829;</span> by AnC
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Wrapper;
