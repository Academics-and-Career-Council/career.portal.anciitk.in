import type { ApplicationData } from "../__generated__/ApplyJobMutation.graphql";
import { Button, Modal, Input, Typography, Space, Alert } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import ApplyJob from "../actions/ApplyJob";
import WithdrawJob from "../actions/WithdrawJob";
import { useRelayEnvironment } from "react-relay";

const ApplicationModal = ({
  visible,
  setVisible,
  job,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  job: Job;
}) => {
  const [resumeLink, setResumeLink] = useState<string>("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const environment = useRelayEnvironment();

  const submitApplication = () => {
    if (resumeLink === "") {
      setErr("Please enter a value in resume input.");
      setTimeout(() => setErr(""), 2000);
      return;
    }

    setLoading(true);
    const data: ApplicationData = {
      jobId: job.id,
      resume: resumeLink,
    };
    console.log(JSON.stringify(data));

    ApplyJob.commit(environment, data, setLoading, setVisible);
  };

  const withdrawApplication = () => {
    setLoading(true)
    WithdrawJob.commit(environment, job.id, setLoading, setVisible)
  }

  return (
    <Modal
      visible={visible}
      title="Apply for job"
      onCancel={() => setVisible(false)}
      footer={[
        <Button key="back" onClick={() => setVisible(false)}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={job?.status === "Not Applied" ? submitApplication : withdrawApplication}
        >
          Submit
        </Button>,
      ]}
    >
      {job?.status === "Not Applied" ? (
        <Space direction="vertical" size="large">
          <Typography.Text>
            You are applying for <strong>{job?.designation}</strong> in{" "}
            <strong>{job?.name}</strong>
          </Typography.Text>
          <Input
            placeholder="Resume"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
          />
        </Space>
      ) : (
        <Typography.Text>
          You are withdrawing your application for <strong>{job?.designation}</strong> in{" "}
          <strong>{job?.name}</strong>
        </Typography.Text>
      )}

      {err && (
        <Alert
          message={err}
          type="error"
          showIcon
          style={{
            width: "max-content",
            fontSize: "small",
            padding: "2px 4px",
            marginTop: "3px",
          }}
        />
      )}
    </Modal>
  );
};

export default ApplicationModal;
