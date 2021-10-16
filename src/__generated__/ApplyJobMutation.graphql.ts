/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ApplicationData = {
    resume: string;
    jobId: string;
};
export type ApplyJobMutationVariables = {
    data: ApplicationData;
};
export type ApplyJobMutationResponse = {
    readonly applyJob: {
        readonly id: string;
        readonly status: string;
    };
};
export type ApplyJobMutation = {
    readonly response: ApplyJobMutationResponse;
    readonly variables: ApplyJobMutationVariables;
};



/*
mutation ApplyJobMutation(
  $data: ApplicationData!
) {
  applyJob(data: $data) {
    id
    status
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "data"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      }
    ],
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "applyJob",
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
        "name": "status",
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
    "name": "ApplyJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ApplyJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "744a69fd1d8f38e179fe9ca233459acb",
    "id": null,
    "metadata": {},
    "name": "ApplyJobMutation",
    "operationKind": "mutation",
    "text": "mutation ApplyJobMutation(\n  $data: ApplicationData!\n) {\n  applyJob(data: $data) {\n    id\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = '588d61ab9f4875f8d92883f4f6f1c6a7';
export default node;
