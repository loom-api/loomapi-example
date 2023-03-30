# LoomAPI Example

This is an example application how to use the LoomAPI client in order to generate a typesafe API client and view observability data in the LoomAPI dashboard. This example uses the OpenAI API to demonstrate an integration - however you can use any OpenAPI spec to generate clients. This demo requires a LoomAPI account. You can sign up for an account [here](https://dashboard.loomapi.com/auth/signup).

## Getting Started

1. Clone Repository

```
git clone https://github.com/loom-api/loomapi-example.git
cd loomapi-example
```

2. Install Dependencies

```
npm i
```

3. Configure .env

```
# This is the location of the config file where gateways are specified.
LOOM_API_CONFIG_FILE=config/loomapi-config.json

# This is the API Key that is generated in the dashboard.
LOOM_API_KEY=

# This is the Tenant ID that is generated in the dashboard.
LOOM_TENANT_ID=

# This is a configurable endpoint where we will send telemetry data in order to provide observability.
LOOM_COLLECTOR_HOST=collector.loomapi.com

# This is your OpenAI key that is used to authenticate with OpenAI APIs
OPEN_AI_KEY=
```

4. Generate the LoomAPI Client

```
npx loomapi generate
```

5. Run the Example

```
npm run start:dev
```

6. View Data in Dashboard

Navigate to the Loom API dashboard [here](https://dashboard.loomapi.com) and view the data and observe the requests coming through.
