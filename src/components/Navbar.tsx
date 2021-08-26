import { useState } from "react";
import { Drawer, Button, Typography, Space, Popover } from "antd";
import { blue } from "@ant-design/colors";
import { FacebookFilled, LinkedinFilled, MenuOutlined } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { SCREEN_STATE } from "../store";

const Navbar = () => {
  const { onMobile } = useRecoilValue(SCREEN_STATE);
  const [visible, setVisible] = useState(true);

  const { Text, Title } = Typography;
  return (
    <header
      style={{
        backgroundColor: blue.primary,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 20px",
      }}
    >
      <Title level={5} style={{ marginBottom: "0", color: "#fff" }}>
        ACADEMIC AND CAREER COUNCIL
      </Title>

      {onMobile ? (
        <div>
          <MenuOutlined />
        </div>
      ) : (
        <nav style={{ backgroundColor: blue.primary }}>
          <Space align="center" size="large">
            <Popover
              placement="bottom"
              content={<Text>Like us on Facebook</Text>}
            >
              <a
                href="https://www.facebook.com/ANCIITK/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookFilled style={{ fontSize: "25px", color: "#fff" }} />
              </a>
            </Popover>
            <Popover
              placement="bottom"
              content={<Text>Follow us on Linkedin</Text>}
            >
              <a
                href="https://www.linkedin.com/company/anciitk/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinFilled style={{ fontSize: "25px", color: "#fff" }} />
              </a>
            </Popover>
            <Button size="large" type="primary">
              Log Out
            </Button>
          </Space>
        </nav>
      )}

      <Drawer
        placement="right"
        closable={true}
        visible={visible}
        onClose={() => setVisible(false)}
        style={{ display: onMobile ? "inherit" : "none" }}
      >
        <Space align="center" size="large" direction="vertical">
          <Popover
            placement="bottom"
            content={<Text>Like us on Facebook</Text>}
          >
            <a
              href="https://www.facebook.com/ANCIITK/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="large"
                icon={<FacebookFilled style={{ fontSize: "25px" }} />}
              >
                <Text>Facebook</Text>
              </Button>
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={<Text>Follow us on Linkedin</Text>}
          >
            <a
              href="https://www.linkedin.com/company/anciitk/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="large"
                icon={<LinkedinFilled style={{ fontSize: "25px" }} />}
              >
                <Text>LinkedIn</Text>
              </Button>
            </a>
          </Popover>
          <Button size="large" type="primary">
            Log Out
          </Button>
        </Space>
      </Drawer>
    </header>
  );
};

export default Navbar;
