import { ApplyJobMutation } from "../__generated__/ApplyJobMutation.graphql";
import { Dispatch, SetStateAction } from "react";
import { Environment, graphql, commitMutation } from "react-relay";
import { message } from "antd";

const mutation = graphql`
  mutation ApplyJobMutation($data: ApplicationData!) {
    applyJob(data: $data) {
      id
      status
    }
  }
`;

const commit = (
  environment: Environment,
  data: ApplyJobMutation["variables"]["data"],
  setLoading: Dispatch<SetStateAction<boolean>>,
  setVisible: Dispatch<SetStateAction<boolean>>
) => {
  return commitMutation<ApplyJobMutation>(environment, {
    mutation,
    variables: { data },
    onCompleted: (res, err) => {
      setLoading(false);
      setVisible(true)
      if (err) {
        message.error(`Unable to Apply for Job Error: ${JSON.stringify(err)}`);
      } else {
        message.success("Here is the epplication process");
      }
    },
    onError: (err) => {
      setLoading(false);
      setVisible(false)
      message.error(err.message)
      console.log(err)
    },
  });
};

export default { commit };