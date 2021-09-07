import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Typography, Descriptions } from "antd";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView } from "react-device-detect";

import Loader from "../components/loader";
import MobileWrapper from "../components/MobileWrapper";
import Wrapper from "../components/Wrapper";
import { fetchData } from "../services/fetch";

const JobDescription: React.FC<
  RouteComponentProps<{ id: string | undefined }>
> = ({ match: { params } }) => {
  const [job, setJob] = useState<Job | undefined>(undefined);
  const [err, setErr] = useState(undefined);

  useEffect(() => {
    fetchData(`http://localhost:5000/jobs/${params?.id}`)
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
      <Helmet>
        <title>Career Portal | Jobs</title>
      </Helmet>
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
          style={{ width: "80%", textAlign: "center", margin: "0 auto" }}
          labelStyle={{
            backgroundColor: "#555454",
            color: "white",
            fontWeight: "bolder",
            width: "200px",
          }}
          contentStyle={{ fontSize: "large" }}
        >
          <Item label="Company Name">{job.companyName}</Item>
          <Item label="Designation">{job.openingName}</Item>
          <Item label="Job Location">{job.location}</Item>
          <Item label="Stipend">{job.stipend}</Item>
          <Item label="Job Description" span={2}>
            {job.description}
          </Item>
          <Item label="Eligiblity Criterion">{job.eligiblity}</Item>
        </Descriptions>
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

export default JobDescription;
