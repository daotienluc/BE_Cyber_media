// database first: đi từ câu lệnh sql để tạo ra db
// tạo table bằng lệnh sql
// sử dụng thư viện sequelize-auto
// npm i sequelize-auto
// npx sequelize-auto -h localhost -d db_app_food -u root -x quynhiu1 -p 3307 --dialect mysql -o src/models -a src/models/additional.json

// Query Parameters
// Query Params thường dùng để phân trang, search, filter
app.get("/query", (request, response, next) => {
const { email, ten } = request.query;

console.log(email, ten);

response.json("Query Parameters");
});

// Path Parameter
// Thường dùng khi lấy chi tiết detail, product ...
app.get("/path/:id", (request, response, next) => {
console.log(request.params);
response.json("Path Parameters");
});

// Header
app.get("/headers", (request, response, next) => {
console.log(request.headers);
response.json("header Parameters");
});

// Body
app.post("/body", (request, response, next) => {
console.log(request.body);
response.json("body Parameters");
});
