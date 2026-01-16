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
  async validateAccount({
    service,
    meterNumber,
    meterType,
  }: {
    service: string;
    meterNumber: string;
    meterType: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/electricity/validate-account",
      {
        service,
        meterNumber,
        meterType,
      }
    );
    return response.data;
  }

  /**
   * Purchase Electricity Token
   * @param data Purchase details
   */
  async purchase({
    service,
    meterNumber,
    meterType,
    amount,
    customerName,
    customerAddress,
    reference,
  }: {
    service: string;
    meterNumber: string;
    meterType: string;
    amount: number;
    customerName: string;
    customerAddress: string;
    reference: string;
  }): Promise<PaybetaResponse> {
    const response = await this.client.post<PaybetaResponse>(
      "/v2/electricity/purchase",
      {
        service,
        meterNumber,
        meterType,
        amount,
        customerName,
        customerAddress,
        reference,
      }
    );
    return response.data;
  }
}
