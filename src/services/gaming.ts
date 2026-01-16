import { AxiosInstance } from "axios";
import {
  PaybetaResponse,
  PurchaseGamingRequest,
  ValidateGamingRequest,
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
   * @param data Validation details
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
   * @param data Purchase details
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
