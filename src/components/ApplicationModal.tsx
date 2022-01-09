import { Button, Modal, Typography, Space } from "antd";
import { Dispatch, SetStateAction } from "react";
import MarkdownIt from "markdown-it";
import parse from 'html-react-parser'

const ApplicationModal = ({
  visible,
  setVisible,
  job,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  job: Job;
}) => {
  const mdParser = new MarkdownIt()

  // const withdrawApplication = () => {
  //   setLoading(true);
  //   WithdrawJob.commit(environment, job.id, setLoading, setVisible);
  // };

  return (
    <Modal
      visible={visible}
      title="Apply for job"
      onCancel={() => setVisible(false)}
      footer={[
        <Button
          key="back"
          type="primary"
          onClick={() => setVisible(false)}
        >
          Ok
        </Button>,
      ]}
    >
      <Space direction="vertical" size="large">
        {
          job?.status === "Not Applied" ? (
            <Typography.Text strong>
              Application procedure for <strong>{job?.designation}</strong> in{" "}
              <strong>{job?.name}</strong>
            </Typography.Text>
          ) : (
            <Typography.Text strong>
              You have already applied for this job
            </Typography.Text>
          )
        }
        <div>
          <Typography.Title level={4}>Application Process</Typography.Title>
          {parse(mdParser.render(job?.application_process || ""))}
        </div>
      </Space>
    </Modal>
  );
};

export default ApplicationModal;
