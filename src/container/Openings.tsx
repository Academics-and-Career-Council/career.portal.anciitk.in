import { OpeningsQuery } from "../__generated__/OpeningsQuery.graphql";
import { graphql, useQueryLoader } from "react-relay";
import { useEffect, Suspense } from "react";

import Loader from "../components/loader";
import Openings from "../pages/Openings";
import ErrorBoundary from "../components/ErrorBoundary";

const query = graphql`
  query OpeningsQuery {
    getJobs {
      id
      name
      stipend
      designation
      status
      deadline
    }
  }
`;

const OpeningsContainer: React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<OpeningsQuery>(query);
  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  if (!queryRef) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <Openings queryRef={queryRef} query={query} />
      </ErrorBoundary>
    </Suspense>
  );
};

export default OpeningsContainer;
