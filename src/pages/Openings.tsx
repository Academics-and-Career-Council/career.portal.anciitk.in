import { useState, useEffect } from "react";
import { Typography, Button, Table } from "antd";
import Wrapper from "../components/Wrapper";
import Loader from "../components/loader";
import "../styles/openings.css";

const Openings: React.FC = () => {
  const [jobs, setJobs] = useState<Job[] | undefined>(undefined);
  const [err, setErr] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/jobs");
      return res.json();
    };

    fetchData()
      .then((data: Job[]) => setJobs(data))
      .catch((err) => {
        console.error(err);
        setErr(err.message);
      });
  }, []);
  const { Title, Text } = Typography;

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
      render: () => <Button type="ghost">Apply</Button>,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
  ];

  const jsx = (
    <div>
      <div className="title">
        <Title level={2}>Job Openings</Title>
        <Text>These are the list of all the job openings.</Text>
      </div>
      {err ? (
        <Text>{err}</Text>
      ) : jobs === undefined ? (
        <Loader />
      ) : (
        <Table columns={columns} dataSource={jobs} pagination={false} />
      )}
    </div>
  );

  return <Wrapper component={jsx} />;
};

export default Openings;
