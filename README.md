# Paybeta SDK

A robust TypeScript SDK for integrating with the [Paybeta API](https://docs.paybeta.ng/). This package supports both TypeScript and JavaScript applications.

## Features

- **Airtime**: Purchase airtime from all major providers.
- **Data Bundles**: Browse and purchase data bundles.
- **Cable TV**: Subscribe to DStv, GOtv, Startimes, etc.
- **Electricity**: Pay bills for prepaid and postpaid meters.
- **Gaming**: Fund betting accounts.
- **Wallet**: Check wallet balance.
- **Showmax**: Purchase Showmax vouchers.
- **Transactions**: Query transaction status.

## Installation

```bash
npm install paybetasdk
```

## Usage

### 1. Initialization

Initialize the client with your Paybeta API Key.

```typescript
import { Paybeta, PaybetaError } from "paybetasdk";

const paybeta = new Paybeta("YOUR_API_KEY");
// Optional: const paybeta = new Paybeta("YOUR_API_KEY", "CUSTOM_BASE_URL");
```

### 2. Airtime Service

**Access via:** `paybeta.airtime`

- **Get Providers**
  returns a list of available airtime providers.

  ```typescript
  const providers = await paybeta.airtime.getProviders();
  ```

- **Purchase Airtime**
  ```typescript
  const purchase = await paybeta.airtime.purchase({
    service: "mtn_vtu", // mtn_vtu, airtel_vtu, glo_vtu, 9mobile_vtu
    phoneNumber: "08012345678",
    amount: 100,
    reference: "REF_12345",
  });
  ```

### 3. Data Service

**Access via:** `paybeta.data`

- **Get Providers**

  ```typescript
  const providers = await paybeta.data.getProviders();
  ```

- **Get Bundles**
  Retrieves available plans for a specific network.

  ```typescript
  const bundles = await paybeta.data.getBundles("mtn_data");
  // returns array of { code, price, name }
  ```

- **Purchase Data**
  ```typescript
  const data = await paybeta.data.purchase({
    service: "mtn_data",
    phoneNumber: "08012345678",
    amount: 1000,
    bundleCode: "DATA_100MB", // Use 'code' from getBundles()
    reference: "REF_67890",
  });
  ```

### 4. Cable TV Service

**Access via:** `paybeta.cable`

- **Get Providers**
  List available cable providers (DStv, GOtv, etc).

  ```typescript
  const providers = await paybeta.cable.getProviders();
  ```

- **Get Bouquets**
  List packages for a provider.

  ```typescript
  const bouquets = await paybeta.cable.getBouquets("dstv");
  // returns { code, name, price }
  ```

- **Validate Account**
  Check if a Smartcard number is valid.

  ```typescript
  const val = await paybeta.cable.validateAccount({
    service: "dstv",
    customerId: "1234567890",
  });
  // val.data.name contains the customer name
  ```

- **Purchase Subscription**
  ```typescript
  const sub = await paybeta.cable.purchase({
    service: "dstv",
    smartCardNumber: "1234567890",
    amount: 5000,
    packageCode: "dstv-padi",
    customerName: "John Doe",
    reference: "REF_ABCDE",
  });
  ```

### 5. Electricity Service

**Access via:** `paybeta.electricity`

- **Get Providers**
  List DISCOs (Ikeja, Eko, Abuja, etc).

  ```typescript
  const discos = await paybeta.electricity.getProviders();
  ```

- **Validate Meter**

  ```typescript
  const meter = await paybeta.electricity.validateAccount({
    service: "ikeja-electric",
    customerId: "1111111111",
    type: "prepaid", // 'prepaid' or 'postpaid'
  });
  // meter.data.name and meter.data.address
  ```

- **Purchase Token / Bill Payment**
  ```typescript
  const power = await paybeta.electricity.purchase({
    service: "ikeja-electric",
    meterNumber: "1111111111",
    meterType: "prepaid",
    amount: 2000,
    customerName: "John Doe",
    customerAddress: "123 Street Name",
    reference: "REF_POWER_1",
  });
  ```

### 6. Gaming Service

**Access via:** `paybeta.gaming`

- **Get Providers**
  List available gaming providers.

  ```typescript
  const providers = await paybeta.gaming.getProviders();
  ```

- **Validate Account**
  Validate a betting account ID.

  ```typescript
  const account = await paybeta.gaming.validateAccount({
    service: "bet9ja",
    customerId: "123456789",
  });
  // account.data.name contains the customer name
  ```

- **Purchase**
  Fund a betting account.

  ```typescript
  const fund = await paybeta.gaming.purchase({
    service: "bet9ja",
    customerId: "123456789",
    amount: 1000,
    reference: "REF_GAME_1",
  });
  ```

### 7. Wallet Service

**Access via:** `paybeta.wallet`

- **Get Balance**
  Check your current wallet balance.

  ```typescript
  const balance = await paybeta.wallet.getBalance();
  // returns { balance, currency, ... }
  ```

### 8. Showmax Service

**Access via:** `paybeta.showmax`

- **Get Bouquets**
  ```typescript
  const plans = await paybeta.showmax.getBouquets();
  ```

### 9. Transaction Service

**Access via:** `paybeta.transaction`

- **Query Status**
  Check the status of any transaction via reference.
  ```typescript
  const status = await paybeta.transaction.query("REF_12345");
  ```

### 10. Error Handling

All methods throw a `PaybetaError` on failure.

```typescript
try {
  await paybeta.airtime.purchase({ ... });
} catch (error) {
  if (error instanceof PaybetaError) {
    console.error(`Status: ${error.status}, Message: ${error.message}`);
    console.log(error.data); // API response payload
  }
}
```

## License

ISC
