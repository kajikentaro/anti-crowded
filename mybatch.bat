call node main
curl -X POST -H "Content-Type: application/json" -d "{\"type\":\"create-room\", \"value\":1,\"id\":5235, \"name\":\"hello\"}" http://localhost:3000/api
curl -X POST -H "Content-Type: application/json" -d "{\"type\":\"update-room\", \"value\":1,\"id\":5235, \"name\":\"hello\"}" http://localhost:3000/api