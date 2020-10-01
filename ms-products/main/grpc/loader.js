const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { promisify } = require('util');
const { packageDefinitionOptions } = require('./package_definition_options');

module.exports = function load({ service, protoFile, apiVersion }) {
    const packageDefinition = protoLoader.loadSync(
        path.resolve(__dirname, `../../api/business/${apiVersion}/contracts/`, `${protoFile}.proto`),
        packageDefinitionOptions
    );

    const packageObject = grpc.loadPackageDefinition(packageDefinition);
    const grpcClient = new packageObject[service](process.env.GRPC_BASE_ADDRESS, grpc.credentials.createInsecure());

    Object.entries(grpcClient.__proto__).map(([prop, value]) => {
        if (value.originalName !== undefined) {
            grpcClient[prop] = promisify(value);
        }
    });

    return grpcClient;
};