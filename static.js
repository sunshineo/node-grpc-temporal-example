require('util').inspect.defaultOptions.depth = null

const grpc = require('@grpc/grpc-js')

const common = require('./codegen/temporal/api/common/v1/message_pb');
const taskqueue = require('./codegen/temporal/api/common/v1/message_pb');
const messages = require('./codegen/temporal/api/workflowservice/v1/request_response_pb');
const services = require('./codegen/temporal/api/workflowservice/v1/service_grpc_pb');

const client = new services.WorkflowServiceClient('localhost:7233', grpc.credentials.createInsecure());

const callback = (err, results) => {
    if (err) {
        console.log(err)
    } else {
        // This is the corresponding response object from './codegen/temporal/api/workflowservice/v1/request_response_pb'
        console.log(results)
    }
}

const listNamespaces = () => {
    const req = new messages.ListNamespacesRequest()
    client.listNamespaces(req, callback)
}

const startWorkflow = () => {
    const payload = new common.Payload()
    payload.setData(Buffer.from('"start-workflow-input"'))
    payload.getMetadataMap().set('encoding', Buffer.from('json/plain'))

    const input = new common.Payloads()
    input.addPayloads(payload)

    const workflowType = new common.WorkflowType()
    workflowType.setName('MyWorkflow')

    const taskQueue = new taskqueue.TaskQueue()
    taskQueue.setName('MY_TASK_QUEUE')

    const req = new messages.StartWorkflowExecutionRequest()
    req.setNamespace('namespace')
    req.setWorkflowId('my-workflow-id')
    req.setRequestId('random-request-id')
    req.setWorkflowType(workflowType)
    req.setTaskQueue(taskQueue)
    req.setInput(input)

    client.StartWorkflowExecution(req, callback)
}

const signalWorkflow = () => {
    const payload = new common.Payload()
    payload.setData(Buffer.from('"signal-input"'))
    payload.getMetadataMap().set('encoding', Buffer.from('json/plain'))

    const input = new common.Payloads()
    input.addPayloads(payload)

    const execution = new common.WorkflowExecution()
    execution.setWorkflowId('workflow-id')

    const req = new messages.SignalWorkflowExecutionRequest()
    req.setNamespace('namespace')
    req.setSignalName('signalMethodName')
    req.setWorkflowExecution(execution)
    req.setInput(input)

    client.signalWorkflowExecution(req, callback)
}
