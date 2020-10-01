package main

import (
	"context"
	"log"
	"net"

	products "github.com/bcostabatista/grpc-architecture/contracts/converted_proto"
	"google.golang.org/grpc"
)

type grpcServer struct{}

func (*grpcServer) GetProducts(ctx context.Context, request *products.ProductsRequest) (*products.ProductsResponse, error) {
	println("Function hit: Get products")
	res := &products.ProductsResponse{
		Products: []*products.Product{
			{
				Id:           "asd",
				PriceInCents: "123123",
				Title:        "asdasd",
				Description:  "asdfasdfasdf",
			},
		},
	}

	return res, nil
}

func main() {
	listen, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen %v", err)
	} else {
		println("Server listening at 0.0.0.0:50051")
	}

	msProducts := grpc.NewServer()
	products.RegisterProductsServiceServer(msProducts, &grpcServer{})

	if err := msProducts.Serve(listen); err != nil {
		log.Fatalf("Server initialization error: %e", err)
	}
}
