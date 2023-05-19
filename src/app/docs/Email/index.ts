import responses from "../responses";

const email = {
  "/email/send": {
    post: {
      tags: ["Email"],
      summary: "Send new email",
      description: "Send new email.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              to: "admin@irembo.com",
              message: "Greetings from Mr NKUBITO",
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
  },
};

export default email;
