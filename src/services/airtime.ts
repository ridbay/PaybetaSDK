import { AxiosInstance } from "axios";
import { PaybetaResponse, PurchaseAirtimeRequest } from "../types";

export class AirtimeService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get list of Airtime providers
   */
  async getProviders(): Promise<PaybetaResponse> {
    const response = await this.client.get<PaybetaResponse>(
      "/v2/airtime/providers"
    );
    return response.data;
  }

  /**
   * Purchase Airtime
   * @param data Purchase details
   */
  async purchase(data: PurchaseAirtimeRequest): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/airtime/purchase",
      data
    );
    return response.data;
  }
}
