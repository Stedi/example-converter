import {OpenAPI, Service} from "@stedi/sdk-converter-node/dist";
import fs from "fs";

OpenAPI.HEADERS = { Authorization: `Key ${process.env.STEDI_API_KEY}` };

const exampleFn = async () => {
  try {
    const input = fs.readFileSync("tst/sample.csv", "utf8");
    const response = await Service.convertCsvToJson({
      input_csv: input,
    });
    const output = JSON.stringify(response.output_json, null, 2);
    console.log(output);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

exampleFn();