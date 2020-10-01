#!/bin/sh

echo "Initialize go mod"
go mod init github.com/bcostabatista/grpc-architecture

echo "Install packages"
go get google.golang.org/grpc

echo "Setting up contracts"
protoc --proto_path=contracts contracts/proto/*.proto --go_out=plugins=grpc:contracts/converted_proto 

echo "Starting up gRPC server"
go run main.go