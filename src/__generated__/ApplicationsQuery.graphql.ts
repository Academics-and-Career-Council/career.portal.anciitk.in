/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ApplicationsQueryVariables = {};
export type ApplicationsQueryResponse = {
    readonly getApplications: ReadonlyArray<{
        readonly id: string;
        readonly student: {
            readonly name: string;
            readonly rollno: number;
            readonly branch: string;
        };
        readonly job: {
            readonly name: string;
            readonly designation: string;
        };
        readonly status: string;
        readonly resume: string;
    } | null>;
};
export type ApplicationsQuery = {
    readonly response: ApplicationsQueryResponse;
    readonly variables: ApplicationsQueryVariables;
};



/*
query ApplicationsQuery {
  getApplications {
    id
    student {
      name
      rollno
      branch
    }
    job {
      name
      designation
      id
    }
    status
    resume
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "UserData",
  "kind": "LinkedField",
  "name": "student",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rollno",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "branch",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "designation",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resume",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ApplicationsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Application",
        "kind": "LinkedField",
        "name": "getApplications",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Job",
            "kind": "LinkedField",
            "name": "job",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ApplicationsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Application",
        "kind": "LinkedField",
        "name": "getApplications",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Job",
            "kind": "LinkedField",
            "name": "job",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "731792c755e16d6e5439d944bce948d8",
    "id": null,
    "metadata": {},
    "name": "ApplicationsQuery",
    "operationKind": "query",
    "text": "query ApplicationsQuery {\n  getApplications {\n    id\n    student {\n      name\n      rollno\n      branch\n    }\n    job {\n      name\n      designation\n      id\n    }\n    status\n    resume\n  }\n}\n"
  }
};
})();
(node as any).hash = '241d6d81ce9ac832f6659d6b1b69b7ce';
export default node;
