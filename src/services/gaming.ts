import { AxiosInstance } from "axios";
import {
  PaybetaResponse,
  // PurchaseGamingRequest,
  // ValidateGamingRequest,
} from "../types";

export class GamingService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get list of Gaming Providers
   */
  async getProviders(): Promise<PaybetaResponse> {
    const response = await this.client.get<PaybetaResponse>(
      "/v2/gaming/providers"
    );
    return response.data;
  }

  /**
   * Validate Gaming Account
   * @param service Service provider code (e.g., 'mtn_data')
   * @param customerId Customer ID
   */
  async validateAccount({
    service,
    customerId,
  }: {
    service: string;
    customerId: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/gaming/validate",
      {
        service,
        customerId,
      }
    );
    return response.data;
  }

  /**
   * Purchase Gaming
   * @param service Service provider code (e.g., 'mtn_data')
   * @param customerId Customer ID
   * @param amount Amount to purchase
   * @param customerName Customer name
   * @param reference Reference for the transaction
   */
  async purchase({
    service,
    customerId,
    amount,
    customerName,
    reference,
  }: {
    service: string;
    customerId: string;
    amount: number;
    customerName: string;
    reference: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/gaming/purchase",
      {
        service,
        customerId,
        amount,
        customerName,
        reference,
      }
    );
    return response.data;
  }
}
