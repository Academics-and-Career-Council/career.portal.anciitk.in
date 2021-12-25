import { ApplicationsQuery } from "../__generated__/ApplicationsQuery.graphql";
import { graphql, useQueryLoader } from "react-relay";
import { useEffect, Suspense } from "react";

import Loader from "../components/loader";
import Applications from "../pages/Applications";
import ErrorBoundary from "../components/ErrorBoundary";

const query = graphql`
  query ApplicationsQuery {
    getApplications {
      id
      student {
        name
        rollno
        branch
      }
      job {
        id
        name
        designation
        deadline
      }
      status
      resume
    }
  }
`;

const ApplicationsContainer: React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<ApplicationsQuery>(query);
  useEffect(() => {
    loadQuery(
      {},
      {
        fetchPolicy: "network-only",
      }
    );
  }, [loadQuery]);

  if (!queryRef) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <Applications queryRef={queryRef} query={query} />
      </ErrorBoundary>
    </Suspense>
  );
};

export default ApplicationsContainer;
