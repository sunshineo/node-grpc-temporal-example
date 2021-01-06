require('util').inspect.defaultOptions.depth = null

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './temporal/api/workflowservice/v1/service.proto'

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs: ['./api']
    }
)
const rootDescriptor = grpc.loadPackageDefinition(packageDefinition)
const workflowserviceDescriptor = rootDescriptor.temporal.api.workflowservice.v1

const client = new workflowserviceDescriptor.WorkflowService('localhost:7233', grpc.credentials.createInsecure())
const callback = (err, results) => {
    if (err) {
        console.log(err)
    } else {
        // This is a plain object
        console.log(results)
    }
}

const listNamespaces = () => {
    client.listNamespaces({}, callback)
}

const startWorkflow = () => {
    const req = {
        namespace: 'develop',
        workflow_id: 'grpc-test-order-VBLPyXIucO-25',
        workflow_type: {
            name: 'OrderWorkflow',
        },
        task_queue: {
            name: 'ORDER_TASK_QUEUE',
        },
        input: {
            payloads: [
                {
                    data: Buffer.from('"VBLPyXIucO"'),
                    metadata: {
                        encoding: Buffer.from('json/plain')
                    }
                }
            ]
        },
        request_id: 'random-request-id',
    }
    client.StartWorkflowExecution(req, callback)
}
const signalWorkflow = () => {
    const req = {
        namespace: 'develop',
        workflow_execution: {
            workflow_id: 'grpc-test-order-VBLPyXIucO-25',
        },
        signal_name: 'updateStatus',
        input: {
            payloads: [
                {
                    data: Buffer.from('"node3"'),
                    metadata: {
                        'encoding': Buffer.from('json/plain')
                    }
                }
            ]
        },
        request_id: 'random-request-id'
    }

    client.SignalWorkflowExecution(req, callback)
}