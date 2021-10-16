import { OpeningsQuery } from "../__generated__/OpeningsQuery.graphql"
import { graphql, useQueryLoader } from "react-relay"
import { useEffect, Suspense } from "react"

import Loader from "../components/loader"
import Openings from "../pages/Openings"

const query = graphql`
  query OpeningsQuery{
    getJobs{
      id,
      name,
      stipend,
      designation,
      status
    }
  }
`

const OpeningsContainer:React.FC = () => {
  const [queryRef, loadQuery] = useQueryLoader<OpeningsQuery>(query)
  useEffect(() => {
    loadQuery({})
  }, [loadQuery])

  if (!queryRef) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Openings queryRef={queryRef} query={query} />
    </Suspense>
  );
}

export default OpeningsContainer