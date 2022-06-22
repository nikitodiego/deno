import { contentTypeFilter, createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";
const app = createApp();

const data : string[] = []

app.post("/json", contentTypeFilter("application/json"), async (req) => {
    const bodyJson = (await req.json()) as { color: string };
    data.push(bodyJson.color)
    // ...respond
    await req.respond({
        status: 200,
        headers: new Headers({
          "content-type": "application/json",
        }),
        body: JSON.stringify(data)
      });
  });
    
// Start listening on port 8899
app.listen({ port: 8899 });