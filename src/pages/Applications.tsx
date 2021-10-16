import { ApplicationsQuery } from "../__generated__/ApplicationsQuery.graphql";
import { Typography, Table, Space } from "antd";
import { Helmet } from "react-helmet";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import { usePreloadedQuery, GraphQLTaggedNode } from "react-relay";

import Wrapper from "../components/Wrapper";
import MobileWrapper from "../components/MobileWrapper";
import ApplicationCard from "../components/ApplicationCard";

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
      render: (job: any) => job.name
    },
    {
      title: "DESIGNATION",
      dataIndex: "job",
      key: "designation",
      render: (job: any) => job.designation
    },
    {
      title: "RESUME",
      dataIndex: "resume",
      key: "resume",
      render: (text: String) => (
        <a href={`${text}`} target="_blank" rel="noreferrer">
          View
        </a>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
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
