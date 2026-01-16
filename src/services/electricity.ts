import { AxiosInstance } from "axios";
import {
  PaybetaResponse,
  // ValidateElectricityRequest,
  // PurchaseElectricityRequest,
} from "../types";

export class ElectricityService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get list of Electricity providers
   */
  async getProviders(): Promise<PaybetaResponse> {
    const response = await this.client.get<PaybetaResponse>(
      "/v2/electricity/providers"
    );
    return response.data;
  }

  /**
   * Validate Electricity Account
   * @param service Service provider code (e.g., 'ikeja_electric')
   * @param meterNumber Meter number
   * @param meterType Meter type (prepaid or postpaid)
   */
  async validateAccount({
    service,
    meterNumber,
    meterType,
  }: {
    service: string;
    meterNumber: string;
    meterType: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/electricity/validate-account",
      {
        service,
        meterNumber,
        meterType,
      }
    );
    return response.data;
  }

  /**
   * Purchase Electricity Token
   * @param service Service provider code (e.g., 'ikeja_electric')
   * @param meterNumber Meter number
   * @param meterType Meter type (prepaid or postpaid)
   * @param amount Amount to purchase
   * @param customerName Customer name
   * @param customerAddress Customer address
   * @param reference Reference for the transaction
   */
  async purchase({
    service,
    meterNumber,
    meterType,
    amount,
    customerName,
    customerAddress,
    reference,
  }: {
    service: string;
    meterNumber: string;
    meterType: string;
    amount: number;
    customerName: string;
    customerAddress: string;
    reference: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/electricity/purchase",
      {
        service,
        meterNumber,
        meterType,
        amount,
        customerName,
        customerAddress,
        reference,
      }
    );
    return response.data;
  }
}
