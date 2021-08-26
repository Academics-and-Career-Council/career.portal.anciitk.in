import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Typography, Descriptions } from "antd";

import Loader from "../components/loader";
import { onMobile } from "../assets/settings";
import MobileWrapper from "../components/MobileWrapper";
import Wrapper from "../components/Wrapper";

const JobDescription: React.FC<
  RouteComponentProps<{ id: string | undefined }>
> = ({ match: { params } }) => {
  const [job, setJob] = useState<Job | undefined>(undefined);
  const [err, setErr] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/jobs/${params?.id}`);
      return res.json();
    };

    fetchData()
      .then((data: Job) => setJob(data))
      .catch((err) => {
        console.error(err);
        setErr(err.message);
      });
  });

  const { Title, Text } = Typography;
  const { Item } = Descriptions;
  const jsx = (
    <div style={{ textAlign: "center" }}>
      <div className="title">
        <Title level={2}>Job Details</Title>
      </div>
      {err ? (
        <Text>{err}</Text>
      ) : job === undefined ? (
        <Loader />
      ) : (
        <Descriptions
          column={2}
          bordered
          style={{ width: "80%", textAlign: 'center', margin: "0 auto" }}
          labelStyle={{
            backgroundColor: "#555454",
            color: "white",
            fontWeight: "bolder",
            width: "200px",
          }}
          contentStyle={{fontSize: 'large'}}
        >
          <Item label="Company Name">{job.companyName}</Item>
          <Item label="Designation">{job.openingName}</Item>
          <Item label="Job Location">{job.location}</Item>
          <Item label="Stipend">{job.stipend}</Item>
          <Item label="Job Description" span={2} >{job.description}</Item>
          <Item label="Eligiblity Criterion">{job.eligiblity}</Item>
        </Descriptions>
      )}
    </div>
  );

  return onMobile ? (
    <MobileWrapper Component={jsx} />
  ) : (
    <Wrapper component={jsx} />
  );
};

export default JobDescription;
