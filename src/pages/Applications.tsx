import { ApplicationsQuery } from "../__generated__/ApplicationsQuery.graphql";
import { Typography, Table, Space } from "antd";
import { Helmet } from "react-helmet";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import { usePreloadedQuery, GraphQLTaggedNode } from "react-relay";

import Wrapper from "../components/Wrapper";
import MobileWrapper from "../components/MobileWrapper";
import ApplicationCard from "../components/ApplicationCard";
import moment, { deprecationHandler } from "moment";

type Props = {
  queryRef: any;
  query: GraphQLTaggedNode;
};

const Applications: React.FC<Props> = ({ queryRef, query }) => {
  // const [err, setErr] = useState(undefined);
  const data = usePreloadedQuery<ApplicationsQuery>(query, queryRef);

  const columns = [
    {
      title: "COMPANY",
      dataIndex: "job",
      key: "name",
      render: (job: any) => job.name,
    },
    {
      title: "JOB TYPE",
      dataIndex: "job",
      key: "type",
      render: (job: any) => job.type
    },
    {
      title: "DESIGNATION",
      dataIndex: "job",
      key: "designation",
      render: (job: any) => job.designation,
    },
    {
      title: "RESUME",
      dataIndex: "resume",
      key: "resume",
      render: (text: string) => {
        let resumeURL;
        try {
          resumeURL = new URL(text)
          return (
            <a href={`${text}`} target="_blank" rel="noreferrer">
              View
            </a>
          );
        } catch (err) {
          return <span>-------</span>
        }
      },
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "DEADLINE",
      dataIndex: "job",
      key: "job",
      sortOrder: "descend",
      sortDirections: [],
      sorter: (a: any, b: any) =>
        moment(a.job.deadline).diff(moment(b.job.deadline)),
      render: (_: any, application: any) =>
        moment(application.job.deadline).format("MMM Do YY HH:mm a"),
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

      {isMobile ? (
        <Space direction="vertical" size="large">
          {data.getApplications.map((application, index) => (
            <ApplicationCard key={index} application={application} />
          ))}
        </Space>
      ) : (
        <Table
          //@ts-ignore
          columns={columns}
          // @ts-ignore
          dataSource={data.getApplications}
          pagination={false}
        />
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
