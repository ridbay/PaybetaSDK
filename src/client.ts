import axios, { AxiosInstance, AxiosError } from "axios";
import { AirtimeService } from "./services/airtime";
import { DataService } from "./services/data";
import { CableService } from "./services/cable";
import { ElectricityService } from "./services/electricity";
import { ShowmaxService } from "./services/showmax";
import { TransactionService } from "./services/transaction";
import { GamingService } from "./services/gaming";
import { WalletService } from "./services/wallet";
import { PaybetaError } from "./errors";

export class Paybeta {
  private client: AxiosInstance;
  public airtime: AirtimeService;
  public data: DataService;
  public cable: CableService;
  public electricity: ElectricityService;
  public showmax: ShowmaxService;
  public transaction: TransactionService;
  public gaming: GamingService;

  public wallet: WalletService;

  constructor(apiKey: string, baseURL: string = "https://api.paybeta.ng") {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "P-API-KEY": apiKey,
      },
    });

    // Response Interceptor for Error Handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          // Server responded with a status code outside 2xx
          const status = error.response.status;
          const data = error.response.data as any;
          const message = data?.message || error.message || "Unknown API Error";

          throw new PaybetaError(message, status, data);
        } else if (error.request) {
          // Request was made but no response received
          throw new PaybetaError("No response received from Paybeta API", 0);
        } else {
          // Something happened in setting up the request
          throw new PaybetaError(error.message, 0);
        }
      }
    );

    this.airtime = new AirtimeService(this.client);
    this.data = new DataService(this.client);
    this.cable = new CableService(this.client);
    this.electricity = new ElectricityService(this.client);
    this.gaming = new GamingService(this.client);
    this.showmax = new ShowmaxService(this.client);
    this.transaction = new TransactionService(this.client);
    this.wallet = new WalletService(this.client);
  }

  public getClient(): AxiosInstance {
    return this.client;
  }
}
