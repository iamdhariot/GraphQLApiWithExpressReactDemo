import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";
export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
  },
});
let links: NexusGenObjects["Link"][] = [
  {
    id: 1,
    url: "iamdhariot.vercel.app",
    description: "Portfolio",
  },
  {
    id: 2,
    url: "iamdhariot.github.io",
    description: "Portfolio",
  },
  {
    id: 3,
    url: "www.google.com",
    description: "google",
  },
];

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve(parent, args, context, info) {
        return links;
      },
    });
  },
});
