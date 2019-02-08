const app = require("express")(),
  graphqlHTTP = require("express-graphql"),
  cors = require("cors"),
  PORT = process.env.PORT || 5000,
  schema = require("./schema");
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
