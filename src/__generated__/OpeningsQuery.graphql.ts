/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type OpeningsQueryVariables = {};
export type OpeningsQueryResponse = {
    readonly getJobs: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly type: string;
        readonly stipend: string;
        readonly designation: string;
        readonly status: string;
        readonly deadline: string;
        readonly application_process: string;
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
    type
    stipend
    designation
    status
    deadline
    application_process
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
        "name": "type",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "application_process",
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
    "cacheID": "6fa73e081408595dc45496cbd9673674",
    "id": null,
    "metadata": {},
    "name": "OpeningsQuery",
    "operationKind": "query",
    "text": "query OpeningsQuery {\n  getJobs {\n    id\n    name\n    type\n    stipend\n    designation\n    status\n    deadline\n    application_process\n  }\n}\n"
  }
};
})();
(node as any).hash = '664ae50ed98ea1b68c69776a8d02600c';
export default node;
