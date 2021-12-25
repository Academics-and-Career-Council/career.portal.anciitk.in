/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DashboardQueryVariables = {};
export type DashboardQueryResponse = {
    readonly getNotifications: ReadonlyArray<{
        readonly id: string;
        readonly heading: string;
        readonly data: string;
        readonly modified: string;
    } | null>;
};
export type DashboardQuery = {
    readonly response: DashboardQueryResponse;
    readonly variables: DashboardQueryVariables;
};



/*
query DashboardQuery {
  getNotifications {
    id
    heading
    data
    modified
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Notification",
    "kind": "LinkedField",
    "name": "getNotifications",
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
        "name": "heading",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "data",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "modified",
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
    "name": "DashboardQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d6b25a9547d1ff6bbb325a3eca1045db",
    "id": null,
    "metadata": {},
    "name": "DashboardQuery",
    "operationKind": "query",
    "text": "query DashboardQuery {\n  getNotifications {\n    id\n    heading\n    data\n    modified\n  }\n}\n"
  }
};
})();
(node as any).hash = '93cc43c1403951c8171fbf100997ce0d';
export default node;
