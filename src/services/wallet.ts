import { AxiosInstance } from "axios";
import { PaybetaResponse, PurchaseAirtimeRequest } from "../types";

export class WalletService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get Wallet Balance
   */
  async getBalance(): Promise<PaybetaResponse> {
    const response = await this.client.get<PaybetaResponse>(
      "/v2/wallet/balance"
    );
    return response.data;
  }
}
