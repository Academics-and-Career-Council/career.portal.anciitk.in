import { JobDescriptionQuery } from "../__generated__/JobDescriptionQuery.graphql";
import { Typography, Descriptions } from "antd";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView } from "react-device-detect";

import MobileWrapper from "../components/MobileWrapper";
import Wrapper from "../components/Wrapper";
import { usePreloadedQuery, GraphQLTaggedNode } from "react-relay";

type Props = {
  queryRef: any;
  query: GraphQLTaggedNode;
};

const JobDescription: React.FC<Props> = ({ queryRef, query }) => {
  // const [err, setErr] = useState(undefined);
  const data = usePreloadedQuery<JobDescriptionQuery>(query, queryRef);

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
        <Item label="Company Name">{data.getJob.name}</Item>
        <Item label="Designation">{data.getJob.designation}</Item>
        <Item label="Job Location">{data.getJob.location}</Item>
        <Item label="Stipend">{data.getJob.stipend}</Item>
        <Item label="Job Description" span={2}>
          {data.getJob.description}
        </Item>
        <Item label="Eligiblity Criterion">{data.getJob.eligibility}</Item>
      </Descriptions>
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
