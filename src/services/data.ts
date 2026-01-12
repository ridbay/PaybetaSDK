import { AxiosInstance } from "axios";
import { PaybetaResponse, PurchaseDataRequest } from "../types";

export class DataService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get list of Data Bundle providers
   */
  async getProviders(): Promise<PaybetaResponse> {
    const response = await this.client.get<PaybetaResponse>(
      "/v2/data-bundle/providers"
    );
    return response.data;
  }

  /**
   * Get Data Bundles for a service
   * @param service Service provider code (e.g., 'mtn_data')
   */
  async getBundles(service: string): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/data-bundle/list",
      { service }
    );
    return response.data;
  }

  /**
   * Purchase Data Bundle
   * @param data Purchase details
   */
  async purchase(data: PurchaseDataRequest): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/data-bundle/purchase",
      data
    );
    return response.data;
  }
}
