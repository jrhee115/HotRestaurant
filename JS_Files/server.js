//Dependencies
var express = require("express");
var path = require("path");

//Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
{
    tableName: "table1",
    customerName: "Joe",
    customerEmail: "Joe@email.com ",
    customerID: "123",
    phoneNumber: "000-000-0000"
},
{
    tableName: "table2",
    customerName: "Joe",
    customerEmail: "Joe@email.com ",
    customerID: "123",
    phoneNumber: "000-000-0000"
},
{
    tableName: "table3",
    customerName: "Joe",
    customerEmail: "Joe@email.com ",
    customerID: "123",
    phoneNumber: "000-000-0000"
}
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tableData", function (req, res) {
    res.sendFile(path.join(__dirname, "tableData.html"));
});
app.get("/waitingData", function (req, res) {
    res.sendFile(path.join(__dirname, "waitingData.html"));
});

app.post("/api/tables", function (req, res) {
    var newTable = req.body;
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    data.push(newTable);

    res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  