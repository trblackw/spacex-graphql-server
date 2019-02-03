const app = require("express")(),
  graphqlHTTP = require("express-graphql"),
  PORT = process.env.PORT || 5000,
  schema = require("./schema");

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
