import { AxiosInstance } from "axios";
import { PaybetaResponse } from "../types";

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
   * @param service
   * @param phoneNumber
   * @param amount
   * @param reference
   */
  async purchase({
    service,
    phoneNumber,
    amount,
    reference,
  }: {
    service: string; // e.g., 'mtn_vtu'
    phoneNumber: string;
    amount: number;
    reference: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/airtime/purchase",
      {
        service,
        phoneNumber,
        amount,
        reference,
      }
    );
    return response.data;
  }
}
