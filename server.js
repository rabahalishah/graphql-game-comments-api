const { graphql, buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`type Query { hello: String age: Int }`);

// The rootValue provides a resolver function for each API endpoint
const rootValue = {
  hello() {
    return "Hello world!";
  },
  age() {
    return 25;
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: "{ age }",
  rootValue,
}).then((response) => {
  console.log(response);
});
