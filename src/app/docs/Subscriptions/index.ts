import responses from "../responses";

const subscriptions = {
  "/subscriptions": {
    post: {
      tags: ["Subscription"],
      summary: "Create New Subscription",
      description: "Create New Subscription.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              name: "freemium",
              limits: {
                daily: 100,
                monthly: 3000,
                system: 10000,
              },
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
    get: {
      tags: ["Subscription"],
      summary: "Get all Subscriptions",
      description: "Get all Subscriptions.",
      security: [{ JWT: [] }],
      parameters: [],
      consumes: ["application/json"],
      responses,
    },
  },
};

export default subscriptions;
