import { Descriptions, Button } from "antd";

const { Item } = Descriptions;

const OpeningCard = ({ job }: { job: Job | null }) => {
  return (
    <div>
      <Descriptions
        bordered
        column={1}
        style={{ textAlign: "left", width: "90vw" }}
      >
        <Item label="Company">{job?.name}</Item>
        <Item label="Designation">{job?.designation}</Item>
        <Item label="Deadline">{"Not known"}</Item>
        <Item label="Status">{"Something"}</Item>
      </Descriptions>
      <Button type="primary" style={{ width: "100%" }}>
        Apply
      </Button>
    </div>
  );
};

export default OpeningCard;
