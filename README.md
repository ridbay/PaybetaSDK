# Paybeta SDK

A robust TypeScript SDK for integrating with the [Paybeta API](https://docs.paybeta.ng/). This package supports both TypeScript and JavaScript applications.

## Features

- **Airtime**: Purchase airtime from all major providers.
- **Data Bundles**: Browse and purchase data bundles.
- **Cable TV**: Subscribe to DStv, GOtv, Startimes, etc.
- **Electricity**: Pay bills for prepaid and postpaid meters.
- **Showmax**: Purchase Showmax vouchers.
- **Transactions**: Query transaction status.

## Installation

```bash
npm install paybetasdk
```

## Usage

### Setup

Initialize the client with your API key.

```typescript
import { Paybeta } from "paybetasdk";

const paybeta = new Paybeta("YOUR_API_KEY");
```

### Examples

#### Purchase Airtime

```typescript
const response = await paybeta.airtime.purchase({
  service: "mtn_vtu",
  phoneNumber: "08012345678",
  amount: 100,
  reference: "unique_ref_123",
});
console.log(response);
```

#### Buy Data Bundle

```typescript
// Get Bundles
const bundles = await paybeta.data.getBundles("mtn_data");

// Purchase
const purchase = await paybeta.data.purchase({
  service: "mtn_data",
  phoneNumber: "08012345678",
  amount: 1000,
  bundleCode: "DATA_100MB",
  reference: "unique_ref_456",
});
```

## License

ISC
