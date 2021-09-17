import { useEffect, useState } from "react";
import { Typography, Table, Space } from "antd";
import { Helmet } from "react-helmet";
import { MobileView, BrowserView, isMobile } from "react-device-detect";

import Wrapper from "../components/Wrapper";
import Loader from "../components/loader";
import MobileWrapper from "../components/MobileWrapper";
import ApplicationCard from "../components/ApplicationCard";
import { fetchData } from "../services/fetch";

const Applications: React.FC = () => {
  const [applications, setApplications] = useState<Application[] | undefined>(
    undefined
  );
  const [err, setErr] = useState(undefined);

  useEffect(() => {
    fetchData("http://localhost:5000/applications")
      .then((data: Application[]) => setApplications(data))
      .catch((err) => {
        console.error(err);
        setErr(err.message);
      });
  }, []);

  const columns = [
    {
      title: "COMPANY",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "DESIGNATION",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "RESUME",
      dataIndex: "resume",
      key: "resume",
      render: (text: String) => (
        <a href={`${text}`} target="_blank" rel="noreferrer">
          View
        </a>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
  ];

  const { Title, Text } = Typography;
  const jsx = (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <title>Career Portal | Job Applications</title>
      </Helmet>
      <div className="title">
        <Title level={2}>Your Applications</Title>
        <Text>These are the posts that you have applied for.</Text>
      </div>

      {err ? (
        <Text>{err}</Text>
      ) : applications === undefined ? (
        <Loader />
      ) : isMobile ? (
        <Space direction="vertical" size="large">
          {applications.map((application, index) => (
            <ApplicationCard key={index} application={application} />
          ))}
        </Space>
      ) : (
        <Table columns={columns} dataSource={applications} pagination={false} />
      )}
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

export default Applications;
