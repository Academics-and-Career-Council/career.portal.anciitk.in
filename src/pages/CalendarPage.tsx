import { useEffect, useState } from "react";
import { Calendar, Typography, Badge, Popover, Space } from "antd";
import { Moment } from "moment";
import Wrapper from "../components/Wrapper";

const CalendarPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
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

  const dateCellRender = (value: Moment) => {
    return jobs.map(
      (job) =>
        job.deadline.slice(0, 2) === value.date().toString() && (
          <Popover
            title="Job Details"
            content={
              <Space direction="vertical">
                <Title level={3}>{job.companyName}</Title>
                <Text>{job.openingName}</Text>
                <Text>{job.deadline}</Text>
              </Space>
            }
          >
            <Badge status="warning" text={job.companyName} />
          </Popover>
        )
    );
  };

  const jsx = (
    <div>
      <div className="title">
        <Title>Calender</Title>
        <Text>Hover over company name to see details.</Text>
      </div>
      {err ? (
        <Text>{err}</Text>
      ) : (
        <div>
          <Calendar
            dateCellRender={dateCellRender}
            style={{ padding: "0 30px 0 30px" }}
          />
        </div>
      )}
    </div>
  );

  return <Wrapper component={jsx} />;
};

export default CalendarPage;
