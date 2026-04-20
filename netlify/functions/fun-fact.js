const facts = [
  "The first website ever created is still online at info.cern.ch.",
  "JavaScript was created in just 10 days by Brendan Eich in 1995.",
  "The first computer bug was an actual bug — a moth found in a Harvard Mark II in 1947.",
  "Over 1.5 billion websites exist, but fewer than 200 million are actively maintained.",
  "The average webpage weighs about 2 MB — heavier than the entire game Doom (1993).",
  "CSS was proposed in 1994, but it took until 2017 for CSS Grid to ship in all major browsers.",
  "The term 'serverless' doesn't mean there are no servers — it means you don't manage them!",
  "Edge functions run close to users, often responding in under 50 milliseconds.",
  "Tim Berners-Lee created HTML, HTTP, and URLs all in one go in 1989.",
  "The first ever favicon was introduced by Internet Explorer 5 in 1999.",
];

exports.handler = async () => {
  const fact = facts[Math.floor(Math.random() * facts.length)];

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ fact }),
  };
};
