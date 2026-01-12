export interface PaybetaResponse<T = any> {
  status: boolean;
  message: string;
  data: T;
}

export interface PaybetaAPIError {
  status: boolean;
  message: string;
}

export interface BaseRequest {
  service?: string; // Some endpoints might use this common field
}

// Airtime
export interface PurchaseAirtimeRequest {
  service: string; // e.g., 'mtn_vtu'
  phoneNumber: string;
  amount: number;
  reference: string;
}

// Data Bundle
export interface PurchaseDataRequest {
  service: string;
  phoneNumber: string;
  amount: number;
  bundleCode: string;
  reference: string;
}

// Cable TV
export interface ValidateCableRequest {
  service: string;
  customerId: string;
}

export interface PurchaseCableRequest {
  service: string;
  smartCardNumber: string;
  amount: number;
  packageCode: string; // This maps to 'packageCode' in docs
  customerName: string;
  reference: string;
}

// Electricity
export interface ValidateElectricityRequest {
  service: string;
  customerId: string;
  type: string; // e.g., 'prepaid' or 'postpaid'
}

export interface PurchaseElectricityRequest {
  service: string;
  meterNumber: string;
  meterType: string; // 'prepaid' | 'postpaid'
  amount: number;
  customerName: string;
  customerAddress: string;
  reference: string;
}
