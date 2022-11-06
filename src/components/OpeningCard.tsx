import { Descriptions, Button, Popconfirm } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const { Item } = Descriptions;

const OpeningCard = ({
  job,
  loading,
  setLoading,
  setModalJob,
  submitApplication,
  setVisible,
}: {
  job: Job | null;
  loading: boolean;
  setLoading: any;
  setModalJob: any;
  submitApplication: any;
  setVisible: any;
}) => {
  return (
    <div>
      <Descriptions
        bordered
        column={1}
        style={{ textAlign: "left", width: "90vw" }}
      >
        <Item label="Company">{job?.name}</Item>
        <Item label="Job Type">{job?.type}</Item>
        <Item label="Designation">{job?.designation}</Item>
        <Item label="Deadline">
          {moment(job?.deadline).format("MMM Do YY HH:mm a")}
        </Item>
        <Item label="Status">
          {moment().diff(job?.deadline) > 0 && job?.status === "Not Applied"
            ? "Deadline Reached"
            : job?.status}
        </Item>
      </Descriptions>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {job?.status === "Not Applied" ? (
          moment().diff(job.deadline) > 0 ? (
            <Button
              type="primary"
              style={{ width: "48%" }}
              loading={loading}
              disabled={true}
            >
              Apply
            </Button>
          ) : (
            <Popconfirm
              title="Are you sure you want to apply for this job?"
              onConfirm={() => {
                setLoading(true);
                submitApplication(job);
                setModalJob(job);
              }}
            >
              <Button type="primary" loading={loading} style={{ width: "48%" }}>
                Apply
              </Button>
            </Popconfirm>
          )
        ) : (
          <Button
            type="primary"
            onClick={() => {
              setModalJob(job);
              setVisible(true);
            }}
            style={{ width: "48%" }}
          >
            Process
          </Button>
        )}
        <Button type="primary" style={{ width: "48%" }}>
          <Link to={`/openings/${job?.id}`}>Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default OpeningCard;
