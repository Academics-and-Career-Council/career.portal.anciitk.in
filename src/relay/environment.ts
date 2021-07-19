import {
  Network,
  Store,
  RecordSource,
  Environment,
  FetchFunction,
} from "relay-runtime";

const fetchQuery: FetchFunction = async (params, variables) => {
  return await fetch("http.localhost:5000/", {
    method: "POST",
    headers: {
      "Contemt-type": "application/json",
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

export default function makeEnvironment() {
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });
}
