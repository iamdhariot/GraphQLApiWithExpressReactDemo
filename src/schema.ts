import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";
export const schema = makeSchema({
  /**
   * Your GraphQL schema will consist of many types that you will pass as
   * an array to the types object.
   * For now, it is intentionally kept empty.
   */
  types,
  outputs: {
    schema: join(process.cwd(), "schema.graphql"), //Nexus will generate for you is a GraphQL schema file of type .graphql
    typegen: join(process.cwd(), "nexus-typegen.ts"), //TypeScript file known as typegen. contain TypeScript type definitions for all types in your GraphQL schema
  },
});
