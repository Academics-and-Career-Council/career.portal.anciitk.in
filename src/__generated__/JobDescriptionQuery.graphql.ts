/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type JobDescriptionQueryVariables = {
    id: string;
};
export type JobDescriptionQueryResponse = {
    readonly getJob: {
        readonly id: string;
        readonly name: string;
        readonly stipend: string;
        readonly deadline: string;
        readonly jd: string;
        readonly nature_of_business: string;
        readonly designation: string;
        readonly location: string;
        readonly description: string;
        readonly eligibility: string;
        readonly shortlist: string;
        readonly test: string;
        readonly application_process: string;
    };
};
export type JobDescriptionQuery = {
    readonly response: JobDescriptionQueryResponse;
    readonly variables: JobDescriptionQueryVariables;
};



/*
query JobDescriptionQuery(
  $id: ID!
) {
  getJob(id: $id) {
    id
    name
    stipend
    deadline
    jd
    nature_of_business
    designation
    location
    description
    eligibility
    shortlist
    test
    application_process
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "getJob",
    "plural": false,
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
        "name": "deadline",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "jd",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nature_of_business",
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
        "name": "location",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "eligibility",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "shortlist",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "test",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "JobDescriptionQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "JobDescriptionQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b5ed1c4c13fae14736ea74146e1c9533",
    "id": null,
    "metadata": {},
    "name": "JobDescriptionQuery",
    "operationKind": "query",
    "text": "query JobDescriptionQuery(\n  $id: ID!\n) {\n  getJob(id: $id) {\n    id\n    name\n    stipend\n    deadline\n    jd\n    nature_of_business\n    designation\n    location\n    description\n    eligibility\n    shortlist\n    test\n    application_process\n  }\n}\n"
  }
};
})();
(node as any).hash = '7632de9654cadc75b28fecf314fd15c0';
export default node;
