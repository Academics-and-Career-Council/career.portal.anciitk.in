import { OpeningsQuery } from "../__generated__/OpeningsQuery.graphql";
import type { ApplicationData } from "../__generated__/ApplyJobMutation.graphql";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Table, Space, Popconfirm, Tooltip, Tag } from "antd";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import moment from "moment";
import { useRelayEnvironment } from "react-relay";

import Wrapper from "../components/Wrapper";
import ApplyJob from "../actions/ApplyJob";
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
  const [trigger, setTrigger] = useState<string>();
  const [modalJob, setModalJob] = useState<Job>(); // to set data in submission modal
  const data = usePreloadedQuery<OpeningsQuery>(query, queryRef);
  const environment = useRelayEnvironment();
  const [loading, setLoading] = useState(false);

  const submitApplication = (job: Job) => {
    const data: ApplicationData = {
      jobId: job.id,
      resume: "",
    };
    ApplyJob.commit(environment, data, setLoading, setVisible);
  };

  const columns = [
    {
      title: "COMPANY NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "OPENING TYPE",
      dataIndex: "type",
      key: "type",
      render: (type: string) => <Tag color={type === 'Corporate' ? "blue" : "green"}>{type}</Tag>
    },
    {
      title: "OPENING NAME",
      dataIndex: "designation",
      key: "designation",
      render: (name: String, record: Job) => (
        <Tooltip title="Click to see detailed view of job">
          <Link to={`/openings/${record.id}`}>{name}</Link>
        </Tooltip>
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
      render: (_: string, record: Job) => {
        if (record.status === "Not Applied") {
          if (moment().diff(record.deadline) > 0) {
            return (
              <Button type="ghost" loading={loading && record.id === trigger} disabled={true}>
                Apply
              </Button>
            );
          } else {
            return (
              <Popconfirm
                title="Are you sure you want to apply for this job?"
                onConfirm={() => {
                  setLoading(true);
                  setTrigger(record.id)
                  submitApplication(record);
                  setModalJob(record);
                }}
              >
                <Button type="ghost" loading={loading && record.id === trigger}>
                  Apply
                </Button>
              </Popconfirm>
            );
          }
        } else {
          return (
            <Tooltip title="Click to view application process">
              <Button
                type="ghost"
                onClick={() => {
                  setModalJob(record);
                  setVisible(true);
                }}
              >
                Process
              </Button>
            </Tooltip>
          );
        }
      },
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status: string, record: Job) => {
        if (moment().diff(record.deadline) > 0 && status === "Not Applied")
          return "Deadline Reached";
        return status;
      },
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
            <OpeningCard
              key={index}
              job={job}
              loading={loading}
              setLoading={setLoading}
              setModalJob={setModalJob}
              submitApplication={submitApplication}
              setVisible={setVisible}
            />
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
