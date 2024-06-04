import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import dotenv from "dotenv";
//## creating an apollo server

/**
 * The schema object you created using Nexus defines your GraphQL schema.
 * You need to provide this when instantiating your server since
 * that’s how Apollo Server knows which API operations to support in the GraphQL API.
 */
export const server = new ApolloServer({
  schema,
});

/**
 * Checking the environment
 * production or not
 */
if (process.env.PORT !== "production") {
  dotenv.config();
}

console.log(
  "%c ",
  "font-size: 1px; padding: 215px 385px; background-size: 770px 430px; background: no-repeat url(https://i0.wp.com/i.giphy.com/media/ZVik7pBtu9dNS/giphy-downsized.gif?w=770&amp;ssl=1);"
);
const port = process.env.PORT || 3000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
