import { JobDescriptionQuery } from "../__generated__/JobDescriptionQuery.graphql";
import { RouteComponentProps } from "react-router";
import { graphql, useQueryLoader } from "react-relay";
import { useEffect, Suspense } from "react";

import Loader from "../components/loader";
import JobDescription from "../pages/JobDescription";

const query = graphql`
  query JobDescriptionQuery($id: ID!) {
    getJob(id: $id) {
      name
      stipend
      designation
      jd
      location
      description
      eligibilty
      shortlist
    }
  }
`;

const OpeningsContainer: React.FC<
  RouteComponentProps<{ id: string | undefined }>
> = ({ match: { params } }) => {
  const [queryRef, loadQuery] = useQueryLoader<JobDescriptionQuery>(query);
  useEffect(() => {
    loadQuery({ id: params?.id || "" });
  }, [loadQuery]);

  if (!queryRef) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <JobDescription queryRef={queryRef} query={query} />
    </Suspense>
  );
};

export default OpeningsContainer;
