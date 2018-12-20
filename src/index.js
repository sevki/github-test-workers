/**
 *  Copyright (c) 2018, Cloudflare, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import React from "react";
import ReactDOMServer from "react-dom/server";

class HelloMessage extends React.Component {
  render() {
    return (
      <div className="App-header">
        This works. 1 
      </div>
    );
  }
}
const header = `<!DOCTYPE html>
<html lang="en">
  <title>Cloudflare Workers Github Test</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <body><div id="app">`;

const footer = `</div>
</body>
</html>`;

let routes = {
  "/": <HelloMessage />
};

async function handleRequest(event) {
  const u = new URL(event.request.url);
  let rendered = ReactDOMServer.renderToString(routes[u.pathname]);
  return new Response(header + rendered + footer, {
    headers: {
      "Content-Type": "text/html"
    }
  });
}

self.addEventListener("fetch", event => {
  event.respondWith(handleRequest(event));
});
