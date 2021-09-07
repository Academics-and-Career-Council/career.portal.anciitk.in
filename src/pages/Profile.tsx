import {
  Typography,
  Image,
  Descriptions,
  Space,
  Button,
  Upload,
  Popconfirm,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { MobileView, BrowserView, isMobile } from "react-device-detect";

import Wrapper from "../components/Wrapper";
import MobileWrapper from "../components/MobileWrapper";
import { Helmet } from "react-helmet";

const Profile: React.FC = () => {
  const { Title } = Typography;
  const jsx = (
    <div>
      <Helmet>
        <title>Career Portal | Profile</title>
      </Helmet>
      <Title level={2} className="title">
        Profile
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          marginTop: "40px",
          justifyContent: "space-around",
        }}
      >
        <Space direction="vertical" align="center">
          <Image
            className="profile_image"
            width={200}
            height={200}
            alt="User image"
            src="https://cdn3.vectorstock.com/i/1000x1000/63/02/face-young-woman-using-face-mask-vector-30736302.jpg"
          />
          <Space>
            <Upload>
              <Button>
                <UploadOutlined /> Change Image
              </Button>
            </Upload>
            <Popconfirm
              title="Are you sure remove this image?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => console.log("image removed")}
            >
              <Button>Remove Image</Button>
            </Popconfirm>
          </Space>
        </Space>

        <Descriptions
          title="User Info"
          bordered
          column={1}
          style={{ width: "400px", marginTop: isMobile ? "50px" : "0" }}
        >
          <Descriptions.Item label="Roll No">Vaibhav goyal</Descriptions.Item>
          <Descriptions.Item label="Branch">
            Chemical Engineering
          </Descriptions.Item>
          <Descriptions.Item label="CPI">8.0</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );

  return (
    <>
      <MobileView>
        <MobileWrapper Component={jsx} />
      </MobileView>
      <BrowserView>
        <Wrapper component={jsx} />
      </BrowserView>
    </>
  );
};

export default Profile;
