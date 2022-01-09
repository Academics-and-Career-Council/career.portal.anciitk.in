import { JobDescriptionQuery } from "../__generated__/JobDescriptionQuery.graphql";
import { RouteComponentProps } from "react-router";
import { graphql, useQueryLoader } from "react-relay";
import { useEffect, Suspense } from "react";

import Loader from "../components/loader";
import JobDescription from "../pages/JobDescription";
import ErrorBoundary from "../components/ErrorBoundary";

const query = graphql`
  query JobDescriptionQuery($id: ID!) {
    getJob(id: $id) {
      id
      name
      stipend
      deadline
      jd
      nature_of_business
      designation
      location
      description
      eligibility
      shortlist
      test
      application_process
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
      <ErrorBoundary>
        <JobDescription queryRef={queryRef} query={query} />
      </ErrorBoundary>
    </Suspense>
  );
};

export default OpeningsContainer;
