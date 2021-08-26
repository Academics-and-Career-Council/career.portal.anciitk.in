import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Table, Space, notification } from "antd";

import Wrapper from "../components/Wrapper";
import MobileWrapper from "../components/MobileWrapper";
import Loader from "../components/loader";
import OpeningCard from "../components/OpeningCard";
import ApplicationModal from "../components/ApplicationModal";
import { onMobile } from "../assets/settings";
import { fetchData } from "../services/fetch";
import "../styles/openings.css";

const { Title, Text } = Typography;

const openNotification = () => {
  notification["info"]({
    message: "View Job Details",
    description: "Click on the Opening Name to view the complete Job Details.",
    duration: 3,
  });
};

const Openings: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>();
  const [err, setErr] = useState<string>();
  const [visible, setVisible] = useState(false);
  const [modalJob, setModalJob] = useState<Job>()

  useEffect(() => {
    fetchData("http://localhost:5000/jobs")
      .then((data: Job[]) => setJobs(data))
      .catch((err) => {
        console.error(err);
        setErr(err.message);
      });

    setTimeout(openNotification, 10000);
  }, []);

  const columns = [
    {
      title: "COMPANY NAME",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "OPENING NAME",
      dataIndex: "openingName",
      key: "openingName",
      render: (name: String, record: Job) => (
        <Link to={`/openings/${record.id}`}>{name}</Link>
      ),
    },
    {
      title: "APPLICATION DEADLINE",
      dataIndex: "deadline",
      key: "deadline",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      render: (_: string, record: Job) => (
        <Button type="ghost" onClick={() => {setVisible(true); setModalJob(record)}}>
          Apply
        </Button>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
  ];

  const jsx = (
    <div style={{ textAlign: "center" }}>
      <div className="title">
        <Title level={2}>Job Openings</Title>
        <Text>These are the list of all the job openings.</Text>
      </div>
      {err ? (
        <Text>{err}</Text>
      ) : jobs === undefined ? (
        <Loader />
      ) : onMobile ? (
        <Space direction="vertical" size="large">
          {jobs.map((job, index) => (
            <OpeningCard key={index} job={job} />
          ))}
        </Space>
      ) : (
        <Table columns={columns} dataSource={jobs} pagination={false} />
      )}
    </div>
  );

  return (
    <>
      {onMobile ? (
        <MobileWrapper Component={jsx} />
      ) : (
        <Wrapper component={jsx} />
      )}
      <ApplicationModal visible={visible} setVisible={setVisible} job={modalJob} />
    </>
  );
};

export default Openings;
