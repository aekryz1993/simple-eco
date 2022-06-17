import { graphql } from "msw";
import { fashionNews } from "./mocks";

export const handlers = [
  graphql.query("GetFashionNews", (_req, res, ctx) => {
    return res(
      ctx.data({
        fashionNews,
      })
    );
  }),
];

// query GetFashionNews {
//   fashionNews {
//     id
//     img
//     title
//     info
//   }
// }
