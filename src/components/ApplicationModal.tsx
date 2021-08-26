import { Button, Modal, Input, Typography, message, Space, Alert } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { postData } from "../services/fetch";

const ApplicationModal = ({
  visible,
  setVisible,
  job,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  job: Job | undefined;
}) => {
  const [resumeLink, setResumeLink] = useState<string>("");
  const [err, setErr] = useState("");

  const submitApplication = () => {
    if (resumeLink === "") {
      setErr("Please enter a value in resume input.");
      setTimeout(() => setErr(''), 2000)
      return;
    }

    const data: Application = {
      id: uuidV4(),
      name: job?.companyName || "",
      designation: job?.openingName || "",
      resume: resumeLink,
      status: "Waiting",
    };

    console.log(JSON.stringify(data));

    postData("http://localhost:5000/applications", data)
      .then(() => message.success("Your Application Submitted Successfully"))
      .catch((err) => {
        console.log(err);
        message.error(
          "Your application could not submitted successfully please try again!"
        );
      });

    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      title="Apply for job"
      onCancel={() => setVisible(false)}
      footer={[
        <Button key="back" onClick={() => setVisible(false)}>
          Return
        </Button>,
        <Button key="submit" type="primary" onClick={submitApplication}>
          Submit
        </Button>,
      ]}
    >
      <Space direction="vertical" size="large">
        <Typography.Text>
          You are applying for <strong>{job?.openingName}</strong> in{" "}
          <strong>{job?.companyName}</strong>
        </Typography.Text>
        <Input
          placeholder="Resume"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
        />
      </Space>
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
