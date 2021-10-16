import { useEffect, useState } from "react";
import { Calendar, Typography, Badge, Popover, Space } from "antd";
import { Moment } from "moment";
import { MobileView, BrowserView } from "react-device-detect";

import Wrapper from "../components/Wrapper";
import MobileWrapper from "../components/MobileWrapper";
import { fetchData } from "../services/fetch";

const CalendarPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [err, setErr] = useState(undefined);

  useEffect(() => {
    fetchData("http://localhost:5000/jobs")
      .then((data: Job[]) => setJobs(data))
      .catch((err) => {
        console.error(err);
        setErr(err.message);
      });
  }, []);
  const { Title, Text } = Typography;

  const dateCellRender = (value: Moment) => {
    return jobs.map(
      (job) =>(
        // job.deadline.slice(0, 2) === value.date().toString() && (
          <Popover
            title="Job Details"
            content={
              <Space direction="vertical">
                <Title level={3}>{job.name}</Title>
                <Text>{job.designation}</Text>
                <Text>{'deadline'}</Text>
              </Space>
            }
          >
            <Badge status="warning" text={job.name} />
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

export default CalendarPage;
