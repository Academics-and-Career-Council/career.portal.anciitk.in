import type { DashboardQuery as DashboardQueryType } from "../__generated__/DashboardQuery.graphql";
import { useEffect, Suspense } from "react";
import { graphql, useQueryLoader } from "react-relay";
import Dashboard from "../pages/Dashboard";

import Loader from "../components/loader";

const query = graphql`
  query DashboardQuery {
    getNotifications {
      id
      heading
      data
    }
  }
`;

const DashboardContainer: React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<DashboardQueryType>(query);

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  if (!queryRef) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Dashboard queryRef={queryRef} query={query} />
    </Suspense>
  );
};

export default DashboardContainer;
