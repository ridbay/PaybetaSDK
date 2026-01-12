import { AxiosInstance } from "axios";
import { PaybetaResponse } from "../types";

export class ShowmaxService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get Showmax Bouquets
   */
  async getBouquets(): Promise<PaybetaResponse> {
    const response = await this.client.get<PaybetaResponse>(
      "/v2/showmax/bouquet"
    );
    return response.data;
  }
  async purchase(): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/showmax/purchase",
      null
    );
    return response.data;
  }
}
