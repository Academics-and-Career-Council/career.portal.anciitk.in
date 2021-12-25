/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type OpeningsQueryVariables = {};
export type OpeningsQueryResponse = {
    readonly getJobs: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly stipend: string;
        readonly designation: string;
        readonly status: string;
        readonly deadline: string;
    } | null>;
};
export type OpeningsQuery = {
    readonly response: OpeningsQueryResponse;
    readonly variables: OpeningsQueryVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "getJobs",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "stipend",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "designation",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deadline",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OpeningsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OpeningsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fc91ffc74c0e454e6d30886b451fda2b",
    "id": null,
    "metadata": {},
    "name": "OpeningsQuery",
    "operationKind": "query",
    "text": "query OpeningsQuery {\n  getJobs {\n    id\n    name\n    stipend\n    designation\n    status\n    deadline\n  }\n}\n"
  }
};
})();
(node as any).hash = '92f34547744a57b1bf241046d48b6cfc';
export default node;
