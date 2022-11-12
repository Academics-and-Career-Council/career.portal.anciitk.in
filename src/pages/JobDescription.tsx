import { JobDescriptionQuery } from "../__generated__/JobDescriptionQuery.graphql";
import { Typography, Descriptions } from "antd";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView } from "react-device-detect";
import moment from "moment";
import parse from "html-react-parser";

import MobileWrapper from "../components/MobileWrapper";
import Wrapper from "../components/Wrapper";
import { usePreloadedQuery, GraphQLTaggedNode } from "react-relay";
import MarkdownIt from "markdown-it";

type Props = {
  queryRef: any;
  query: GraphQLTaggedNode;
};

const { Title } = Typography;
const { Item } = Descriptions;

const JobDescription: React.FC<Props> = ({ queryRef, query }) => {
  // const [err, setErr] = useState(undefined);
  const { getJob } = usePreloadedQuery<JobDescriptionQuery>(query, queryRef);
  const {
    name,
    description,
    type,
    deadline,
    designation,
    eligibility,
    location,
    shortlist,
    stipend,
    nature_of_business,
    application_process,
    test,
  } = getJob;

  const mdParser = new MarkdownIt();
  const jsx = (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <title>Career Portal | Jobs</title>
      </Helmet>
      <div className="title">
        <Title level={2}>Job Details</Title>
      </div>

      <Descriptions
        bordered
        style={{ width: "80%", textAlign: "left", margin: "0 auto" }}
        labelStyle={{
          fontWeight: "bolder",
          // width: "200px",
        }}
        layout="vertical"
        column={{ xxl: 3, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
        contentStyle={{ fontSize: "large" }}
      >
        <Item label="Company Name">{name}</Item>
        <Item label="Job type">{type}</Item>
        <Item label="Designation">{designation}</Item>
        <Item label="Job Location">{location}</Item>
        <Item label="Stipend">{stipend}</Item>
        <Item label="Job Deadline">
          {moment(deadline).format("MMM Do YY HH:mm a")}
        </Item>
        <Item label="Nature of Business">{nature_of_business}</Item>
        <Item label="Eligiblity Criterion" span={2}>
          {eligibility}
        </Item>
        <Item label="Job Description" span={2}>
          {parse(mdParser.render(description))}
        </Item>
        <Item label="Application Process" span={2}>
          {parse(mdParser.render(application_process))}
        </Item>
        <Item label="Shortlist Citerion" span={2}>
          {shortlist}
        </Item>

        <Item label="Test Details" span={2}>
          {test}
        </Item>
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
