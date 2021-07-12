/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +videosByTitle: ?{|
    +items: ?$ReadOnlyArray<?{|
      +_id: ?{|
        +kind: ?string,
        +videoId: ?string,
      |},
      +snippet: ?{|
        +title: ?string
      |},
    |}>
  |},
  +moviesByTitle: ?{|
    +Search: ?$ReadOnlyArray<?{|
      +Title: ?string,
      +Year: ?string,
    |}>
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  videosByTitle(title: "Ronaldinho") {
    items {
      _id: id {
        kind
        videoId
      }
      snippet {
        title
      }
    }
  }
  moviesByTitle(title: "Ronaldinho") {
    Search {
      Title
      Year
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "title",
    "value": "Ronaldinho"
  }
],
v1 = [
  {
    "alias": null,
    "args": (v0/*: any*/),
    "concreteType": "VideosQueryType",
    "kind": "LinkedField",
    "name": "videosByTitle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Video",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          {
            "alias": "_id",
            "args": null,
            "concreteType": "VideoID",
            "kind": "LinkedField",
            "name": "id",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "videoId",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Snippet",
            "kind": "LinkedField",
            "name": "snippet",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "videosByTitle(title:\"Ronaldinho\")"
  },
  {
    "alias": null,
    "args": (v0/*: any*/),
    "concreteType": "MoviesQueryType",
    "kind": "LinkedField",
    "name": "moviesByTitle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "Search",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "Title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "Year",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "moviesByTitle(title:\"Ronaldinho\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v1/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f47c1c159e990f9254aed1ef53ef312d",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  videosByTitle(title: \"Ronaldinho\") {\n    items {\n      _id: id {\n        kind\n        videoId\n      }\n      snippet {\n        title\n      }\n    }\n  }\n  moviesByTitle(title: \"Ronaldinho\") {\n    Search {\n      Title\n      Year\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ab5965525dd27175a4adfd5442e52fd1';

module.exports = node;
