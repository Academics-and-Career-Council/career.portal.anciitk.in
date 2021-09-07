import { Descriptions, Button } from "antd";

const { Item } = Descriptions;

const OpeningCard = ({ job }: { job: Job }) => {
  return (
    <div>
      <Descriptions
        bordered
        column={1}
        style={{ textAlign: "left", width: "90vw" }}
      >
        <Item label="Company">{job.companyName}</Item>
        <Item label="Designation">{job.openingName}</Item>
        <Item label="Deadline">{job.deadline}</Item>
        <Item label="Status">{job.status}</Item>
      </Descriptions>
      <Button type="primary" style={{ width: "100%" }}>
        Apply
      </Button>
    </div>
  );
};

export default OpeningCard;
