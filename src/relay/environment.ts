import {
  Network,
  Store,
  RecordSource,
  Environment,
  FetchFunction,
} from "relay-runtime";

const fetchQuery: FetchFunction = async (params, variables) => {
  // for development purpose
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );

  return await fetch(process.env.REACT_APP_BACKEND_URL || "", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "email": "vgoyal20@iitk.ac.in"
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
