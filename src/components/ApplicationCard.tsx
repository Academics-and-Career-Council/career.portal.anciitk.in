import { Descriptions, Button } from "antd";

const { Item } = Descriptions;

const ApplicationCard = ({
  application,
}: {
  application: Application | null;
}) => {
  return (
    <div>
      <Descriptions
        bordered
        column={1}
        style={{ textAlign: "left", width: "90vw" }}
      >
        <Item label="Company">{application?.job.name}</Item>
        <Item label="Designation">{application?.job.designation}</Item>
        <Item label="Status">{application?.status}</Item>
      </Descriptions>
      <Button
        type="primary"
        style={{ width: "100%" }}
        disabled={!application?.resume}
      >
        <a href={`${application?.resume}`}>View Resume</a>
      </Button>
    </div>
  );
};

export default ApplicationCard;
