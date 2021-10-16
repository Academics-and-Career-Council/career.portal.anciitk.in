/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type WithdrawJobMutationVariables = {
    id: string;
};
export type WithdrawJobMutationResponse = {
    readonly withdrawJob: {
        readonly id: string;
        readonly status: string;
    };
};
export type WithdrawJobMutation = {
    readonly response: WithdrawJobMutationResponse;
    readonly variables: WithdrawJobMutationVariables;
};



/*
mutation WithdrawJobMutation(
  $id: ID!
) {
  withdrawJob(id: $id) {
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
    "name": "withdrawJob",
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
    "name": "WithdrawJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WithdrawJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fcd39745c1582f02fa59fefeb737de3a",
    "id": null,
    "metadata": {},
    "name": "WithdrawJobMutation",
    "operationKind": "mutation",
    "text": "mutation WithdrawJobMutation(\n  $id: ID!\n) {\n  withdrawJob(id: $id) {\n    id\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fce50930461ffe692720b0e1b9c73d4c';
export default node;
