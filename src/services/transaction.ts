import { AxiosInstance } from "axios";
import { PaybetaResponse } from "../types";

export class TransactionService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Query Transaction Status
   * @param reference Transaction reference
   */
  async query(reference: string): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/transaction/query",
      { reference }
    );
    return response.data;
  }
}
