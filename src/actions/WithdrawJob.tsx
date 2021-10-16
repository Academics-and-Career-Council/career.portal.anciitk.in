import { WithdrawJobMutation } from "../__generated__/WithdrawJobMutation.graphql";
import { Dispatch, SetStateAction } from "react";
import { Environment, graphql, commitMutation } from "react-relay";
import { message } from "antd";

const mutation = graphql`
  mutation WithdrawJobMutation($id: ID!) {
    withdrawJob(id: $id) {
      id
      status
    }
  }
`;

const commit = (
  environment: Environment,
  id: string,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setVisible: Dispatch<SetStateAction<boolean>>
) => {
  return commitMutation<WithdrawJobMutation>(environment, {
    mutation,
    variables: { id },
    onCompleted: (res, err) => {
      setLoading(false);
      setVisible(false)
      if (err) {
        message.error(`Unable to Withdraw application Error: ${JSON.stringify(err)}`);
      } else {
        message.success("Successfully withdraw your application");
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