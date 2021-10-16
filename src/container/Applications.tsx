import { ApplicationsQuery } from "../__generated__/ApplicationsQuery.graphql"
import { graphql, useQueryLoader } from "react-relay"
import { useEffect, Suspense } from "react"

import Loader from "../components/loader"
import Applications from "../pages/Applications"

const query = graphql`
  query ApplicationsQuery{
    getApplications{
      id,
      student{
        name,
        rollno,
        branch
      },
      job{
        name,
        designation
      }, 
      status,
      resume
    }
  }
`

const ApplicationsContainer:React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<ApplicationsQuery>(query)
  useEffect(() => {
    loadQuery({}, {
      fetchPolicy: 'network-only'
    })
  }, [loadQuery])

  if (!queryRef) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Applications queryRef={queryRef} query={query} />
    </Suspense>
  );
}

export default ApplicationsContainer