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
  async validateAccount(data: ValidateGamingRequest): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/gaming/validate",
      data
    );
    return response.data;
  }

  /**
   * Purchase Gaming
   * @param data Purchase details
   */
  async purchase(data: PurchaseGamingRequest): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/gaming/purchase",
      data
    );
    return response.data;
  }
}
