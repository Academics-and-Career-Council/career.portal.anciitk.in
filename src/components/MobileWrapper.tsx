import { Layout, BackTop } from "antd";
import {UpCircleOutlined} from '@ant-design/icons'
import DashboardNavbar from "./DashboardNavbar";
import '../styles/wrapper.css'

const { Header, Content, Footer } = Layout;

const MobileWrapper = ({ Component }: { Component: JSX.Element }) => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: '#fff' }}>
      <Header className='header'>
        <DashboardNavbar />
      </Header>
      <Content
        style={{
          margin: "30px 0",
          backgroundColor: "#fff",
          paddingBottom: "50px",
        }}
      >
        {Component}
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
  );
};

export default MobileWrapper;
