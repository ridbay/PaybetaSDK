import { AxiosInstance } from "axios";
import {
  PaybetaResponse,
  ValidateElectricityRequest,
  PurchaseElectricityRequest,
} from "../types";

export class ElectricityService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get list of Electricity providers
   */
  async getProviders(): Promise<PaybetaResponse> {
    const response = await this.client.get<PaybetaResponse>(
      "/v2/electricity/providers"
    );
    return response.data;
  }

  /**
   * Validate Electricity Account
   * @param data Validation details
   */
  async validateAccount(
    data: ValidateElectricityRequest
  ): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/electricity/validate-account",
      data
    );
    return response.data;
  }

  /**
   * Purchase Electricity Token
   * @param data Purchase details
   */
  async purchase(data: PurchaseElectricityRequest): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/electricity/purchase",
      data
    );
    return response.data;
  }
}
