import { useEffect, useState } from "react";
import { Typography, Table } from "antd";
import Wrapper from "../components/Wrapper";
import Loader from "../components/loader";

const Applications = () => {
  const [applications, setApplications] = useState<Application[] | undefined>(
    undefined
  );
  const [err, setErr] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/applications");
      return res.json();
    };

    fetchData()
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
      render: (text: String) => <a href={`${text}`}>View</a>,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
  ];

  const { Title, Text } = Typography;
  const jsx = (
    <div>
      <div className="title">
        <Title level={2}>Your Applications</Title>
        <Text>These are the posts that you have applied for.</Text>
      </div>

      {err ? (
        <Text>{err}</Text>
      ) : applications === undefined ? (
        <Loader />
      ) : (
        <Table columns={columns} dataSource={applications} pagination={false} />
      )}
    </div>
  );

  return <Wrapper component={jsx} />;
};

export default Applications;
