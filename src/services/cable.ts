import { AxiosInstance } from "axios";
import {
  PaybetaResponse,
  ValidateCableRequest,
  PurchaseCableRequest,
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
  async validateAccount(data: ValidateCableRequest): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/cable-tv/validate-account",
      data
    );
    return response.data;
  }

  /**
   * Purchase Cable TV Subscription
   * @param data Purchase details
   */
  async purchase(data: PurchaseCableRequest): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/cable/purchase",
      data
    );
    return response.data;
  }
}
