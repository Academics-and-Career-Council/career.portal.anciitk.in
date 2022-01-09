import { useState } from "react";
import { Layout, Typography, Menu, Space, Button, BackTop } from "antd";
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  MessageOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { SESSION_STATE } from "../store";
import logout from "../services/logout";
import logo from "../assets/img/logo192.png";
import "../styles/wrapper.css";

const { Header, Sider, Content, Footer } = Layout;

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
  const [session, setSession] = useRecoilState(SESSION_STATE);

  const path = window.location.pathname.split("/")[1];
  const key = pathsToKey[path].toString();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed: boolean) => setCollapsed(collapsed)}
        width={210}
        style={{ position: "sticky", top: "0px", left: "0" }}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={[key]}
          style={{ position: "sticky", top: "0px", left: "0" }}
        >
          <Space align="end" style={{ margin: "20px 0", zIndex: 1 }}>
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
      <Layout>
        <Header className="header">
          <Space
            size="large"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button type="ghost" style={{ color: "white" }}>
              <a href={process.env.REACT_APP_LOGIN_URL}>Accounts</a>
            </Button>
            <Button
              type="ghost"
              style={{ color: "white", marginRight: "30px" }}
              onClick={() => logout(session?.logoutUrl || "", setSession)}
            >
              Logout
            </Button>
          </Space>
        </Header>
        <Content
          style={{
            margin: "30px 30px 0 30px",
            backgroundColor: "#fff",
            // paddingBottom: "50px",
          }}
        >
          {component}
          <BackTop>
            <div className="backTop">
              <UpCircleOutlined />
            </div>
          </BackTop>
        </Content>
        <Footer
          style={{
            marginTop: "30px",
            display: "block",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            marginRight: "30px",
            marginLeft: "30px",
          }}
        >
          Made with <span style={{ color: "red" }}>&hearts;</span> by Academics
          and Career council
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Wrapper;
