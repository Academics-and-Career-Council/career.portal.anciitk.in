import { Descriptions, Button } from "antd";

const { Item } = Descriptions;

const ApplicationCard = ({ application }: { application: Application }) => {
  return (
    <div>
      <Descriptions
        bordered
        column={1}
        style={{ textAlign: "left", width: "90vw" }}
      >
        <Item label="Company">{application.name}</Item>
        <Item label="Designation">{application.designation}</Item>
        <Item label="Status">{application.status}</Item>
      </Descriptions>
      <a href={`${application.resume}`}>
        <Button type="primary" style={{ width: "100%" }}>
          View Resume
        </Button>
      </a>
    </div>
  );
};

export default ApplicationCard;
