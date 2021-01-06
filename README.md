# node-grpc-temporal-example
[Temporal](https://temporal.io/) currently only have Go and Java SDK. I wrote my workflows in Java but needed to start, signal, query workflow from Node JS code. Without a Node SDK, I started by use [shelljs](https://www.npmjs.com/package/shelljs) to drive the official [tctl](https://docs.temporal.io/docs/tctl/). It works but the problem is the return is hard to parse.

Then I asked in the forum and got some help https://community.temporal.io/t/how-to-do-operations-tctl-can-do-from-any-programming-language/1256/13 . Here is an example of call Temporal from node using grpc.

This [tutorial](https://www.grpc.io/docs/languages/node/basics/) and this [blog post](https://medium.com/expedia-group-tech/the-weird-world-of-grpc-tooling-for-node-js-part-1-40a442966876) also helped me a lot.

The api folder is a git submodule from https://github.com/temporalio/api

## Dynamic code using @grpc/proto-loader
https://www.npmjs.com/package/@grpc/proto-loader

`dynamic.js` is loading proto3 dynamically. Easy to use but easy to make mistake when create the exact request object


## Generate static code from the proto3 definations
Code under `codegen` are generated from the api folder using the following commands. If you have a better way to do this let me know

```
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/workflowservice/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/enums/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/common/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/history/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/failure/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/workflow/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/taskqueue/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/command/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/filter/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/namespace/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/query/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/replication/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/temporal/api/version/v1/*.proto
grpc_tools_node_protoc -I=./api --js_out=import_style=commonjs,binary:./codegen --grpc_out=grpc_js:./codegen ./api/dependencies/gogoproto/*.proto
```

`static.js` is using the generated code to talk to Temporal

