import {
  Typography,
  Image,
  Descriptions,
  Space,
} from "antd";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import { useRecoilValue } from "recoil";

import Wrapper from "../components/Wrapper";
import MobileWrapper from "../components/MobileWrapper";
import { Helmet } from "react-helmet";
import { SESSION_STATE } from "../store";

const Profile: React.FC = () => {
  const { Title } = Typography;
  const session = useRecoilValue(SESSION_STATE);
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
            alt="User image"
            src={`https://images-students-iitk.sgp1.digitaloceanspaces.com/images-students-iitk/${session?.user.rollno}.jpg`}
            style={{ objectFit: 'contain', borderRadius: '15px', border: 'none' }}
          />
          {/* <Space>
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
          </Space> */}
        </Space>

        <Descriptions
          title="User Info"
          bordered
          column={1}
          style={{ width: "400px", marginTop: isMobile ? "50px" : "0" }}
        >
          <Descriptions.Item label="Name">
            {session?.user.name}
          </Descriptions.Item>
          <Descriptions.Item label="Roll No">
            {session?.user.rollno}
          </Descriptions.Item>
          <Descriptions.Item label="Branch">
            {session?.user.department}
          </Descriptions.Item>
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
