import LoomClient from "@loomapi/client";
import * as dotenv from "dotenv";

const loom = new LoomClient();

dotenv.config();

loom
  .openai()
  .listModels()
  .then((models) => {
    console.log(`Found ${models.data.length} models`);
  })
  .catch((err) => {
    console.error("Ooops! Something went wrong!");
  });
