export default async (request, context) => {
  return new Response(`Hello! You're visiting from ${context.geo?.city || "an unknown location"}.`, {
    headers: { "content-type": "text/plain" },
  });
};

export const config = { path: "/edge-hello" };
