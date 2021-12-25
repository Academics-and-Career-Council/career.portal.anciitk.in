import { OpeningsQuery } from "../__generated__/OpeningsQuery.graphql";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Table, Space } from "antd";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import moment from "moment";

import Wrapper from "../components/Wrapper";
import MobileWrapper from "../components/MobileWrapper";
import OpeningCard from "../components/OpeningCard";
import ApplicationModal from "../components/ApplicationModal";
import "../styles/openings.css";
import { usePreloadedQuery, GraphQLTaggedNode } from "react-relay";

const { Title, Text } = Typography;

type Props = {
  queryRef: any;
  query: GraphQLTaggedNode;
};

const Openings: React.FC<Props> = ({ queryRef, query }) => {
  // const [err, setErr] = useState<string>();
  const [visible, setVisible] = useState(false); // state to manipulate submission modal view state
  const [modalJob, setModalJob] = useState<Job>(); // to set data in submission modal
  const data = usePreloadedQuery<OpeningsQuery>(query, queryRef);

  const columns = [
    {
      title: "COMPANY NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "OPENING NAME",
      dataIndex: "designation",
      key: "designation",
      render: (name: String, record: Job) => (
        <Link to={`/openings/${record.id}`}>{name}</Link>
      ),
    },
    {
      title: "APPLICATION DEADLINE",
      dataIndex: "deadline",
      key: "deadline",
      sortOrder: "descend",
      sortDirections: [],
      sorter: (a: any, b: any) => moment(a.deadline).diff(moment(b.deadline)),
      render: (date: string) => moment(date).format("MMM Do YY HH:mm a"),
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      render: (_: string, record: Job) => (
        <Button
          type="ghost"
          onClick={() => {
            setModalJob(record);
            setVisible(true);
          }}
          disabled={record.status !== "Not Applied"}
        >
          Apply
        </Button>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
  ];

  const jsx = (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <title>Career Portal | Job Openings</title>
      </Helmet>
      <div className="title">
        <Title level={2}>Job Openings</Title>
        <Text>These are the list of all the job openings.</Text>
      </div>
      {isMobile ? (
        <Space direction="vertical" size="large">
          {data.getJobs.map((job, index) => (
            <OpeningCard key={index} job={job} />
          ))}
        </Space>
      ) : (
        //@ts-ignore
        <Table columns={columns} dataSource={data.getJobs} pagination={false} />
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
      <ApplicationModal
        visible={visible}
        setVisible={setVisible}
        //@ts-ignore
        job={modalJob}
      />
    </>
  );
};

export default Openings;
