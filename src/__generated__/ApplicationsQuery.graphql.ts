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
            readonly id: string;
            readonly name: string;
            readonly type: string;
            readonly designation: string;
            readonly deadline: string;
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
      id
      name
      type
      designation
      deadline
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
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Application",
    "kind": "LinkedField",
    "name": "getApplications",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
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
      {
        "alias": null,
        "args": null,
        "concreteType": "Job",
        "kind": "LinkedField",
        "name": "job",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
            "name": "designation",
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
        "name": "resume",
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
    "name": "ApplicationsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ApplicationsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "054b4e7ee1520219b88b87163fff9f54",
    "id": null,
    "metadata": {},
    "name": "ApplicationsQuery",
    "operationKind": "query",
    "text": "query ApplicationsQuery {\n  getApplications {\n    id\n    student {\n      name\n      rollno\n      branch\n    }\n    job {\n      id\n      name\n      type\n      designation\n      deadline\n    }\n    status\n    resume\n  }\n}\n"
  }
};
})();
(node as any).hash = '9bb53c6986b627a8861ff7add9971777';
export default node;
