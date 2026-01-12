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

#### 1. Airtime Purchase

```typescript
const response = await paybeta.airtime.purchase({
  service: "mtn_vtu",
  phoneNumber: "08012345678",
  amount: 100,
  reference: "unique_ref_123",
});
console.log(response);
```

#### 2. Data Bundle Purchase

```typescript
// Get Bundles for a provider (e.g., mtn_data, airtel_data, glo_data, 9mobile_data)
const bundles = await paybeta.data.getBundles("mtn_data");
console.log(bundles);

// Purchase a specific bundle
const purchase = await paybeta.data.purchase({
  service: "mtn_data",
  phoneNumber: "08012345678",
  amount: 1000,
  bundleCode: "DATA_100MB", // Get this from the getBundles() call
  reference: "unique_ref_456",
});
```

#### 3. Cable TV Subscription

```typescript
// Validate SmartCard Number first
const validation = await paybeta.cable.validateAccount({
  service: "dstv", // dstv, gotv, startimes
  customerId: "1234567890",
});

if (validation.status) {
  // Get available packages
  const bouquets = await paybeta.cable.getBouquets("dstv");

  // Purchase Subscription
  const subscription = await paybeta.cable.purchase({
    service: "dstv",
    smartCardNumber: "1234567890",
    amount: 5000,
    packageCode: "dstv-padi", // Get code from getBouquets()
    customerName: validation.data.name,
    reference: "unique_ref_789",
  });
}
```

#### 4. Electricity Bill Payment

```typescript
// Validate Meter Number
const meter = await paybeta.electricity.validateAccount({
  service: "ikeja-electric", // ikeja-electric, eko-electric, etc.
  customerId: "1111111111",
  type: "prepaid", // or 'postpaid'
});

if (meter.status) {
  // Purchase Token
  const purchase = await paybeta.electricity.purchase({
    service: "ikeja-electric",
    meterNumber: "1111111111",
    meterType: "prepaid",
    amount: 2000,
    customerName: meter.data.name,
    customerAddress: meter.data.address,
    reference: "unique_ref_101",
  });
}
```

#### 5. Showmax Vouchers

```typescript
// Get available Showmax plans
const plans = await paybeta.showmax.getBouquets();
console.log(plans);
// Note: Purchase flow for Showmax might follow generic patterns or be direct voucher generation.
```

#### 6. Transaction Status

```typescript
// Check the status of any transaction using its reference
const status = await paybeta.transaction.query("unique_ref_123");
console.log(status);
```

#### 7. Error Handling

The SDK throws a wrapper error `PaybetaError` for all API errors.

```typescript
import { Paybeta, PaybetaError } from "paybetasdk";

try {
  await paybeta.airtime.purchase({ ... });
} catch (error) {
  if (error instanceof PaybetaError) {
    // API returned an error (e.g., 400 Bad Request, 401 Unauthorized)
    console.error(`Status: ${error.status}`); // HTTP Status Code
    console.error(`Message: ${error.message}`); // Readable message
    console.error(`Data:`, error.data); // Full API response payload
  } else {
    // Network or other unknown error
    console.error("Unknown Error:", error);
  }
}
```

## License

ISC
