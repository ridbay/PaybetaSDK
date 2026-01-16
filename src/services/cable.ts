import { AxiosInstance } from "axios";
import {
  PaybetaResponse,
  // ValidateCableRequest,
  // PurchaseCableRequest,
} from "../types";

export class CableService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get list of Cable TV providers
   */
  async getProviders(): Promise<PaybetaResponse> {
    const response = await this.client.get<PaybetaResponse>(
      "/v2/cable-tv/providers"
    );
    return response.data;
  }

  /**
   * Get Bouquets for a service
   * @param service Service provider code (e.g., 'dstv', 'gotv')
   */
  async getBouquets(service: string): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/cable-tv/bouquets",
      { service }
    );
    return response.data;
  }

  /**
   * Validate Cable TV Account
   * @param data Validation details
   */
  async validateAccount({
    service,
    smartCardNumber,
  }: {
    service: string;
    smartCardNumber: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/cable-tv/validate-account",
      {
        service,
        smartCardNumber,
      }
    );
    return response.data;
  }

  /**
   * Purchase Cable TV Subscription
   * @param service Service provider code (e.g., 'dstv', 'gotv')
   * @param smartCardNumber Smart card number
   * @param amount Amount to purchase
   * @param reference Reference for the transaction
   * @param packageCode Code for the cable TV package
   * @param customerName Customer name
   */
  async purchase({
    service,
    smartCardNumber,
    amount,
    reference,
    packageCode,
    customerName,
  }: {
    service: string;
    smartCardNumber: string;
    amount: number;
    reference: string;
    packageCode: string;
    customerName: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/cable/purchase",
      {
        service,
        smartCardNumber,
        amount,
        reference,
        packageCode,
        customerName,
      }
    );
    return response.data;
  }
}
