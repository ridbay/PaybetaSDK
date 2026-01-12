import axios, { AxiosInstance } from "axios";
import { AirtimeService } from "./services/airtime";
import { DataService } from "./services/data";
import { CableService } from "./services/cable";
import { ElectricityService } from "./services/electricity";
import { ShowmaxService } from "./services/showmax";
import { TransactionService } from "./services/transaction";

export class Paybeta {
  private client: AxiosInstance;
  public airtime: AirtimeService;
  public data: DataService;
  public cable: CableService;
  public electricity: ElectricityService;
  public showmax: ShowmaxService;
  public transaction: TransactionService;

  constructor(apiKey: string, baseURL: string = "https://api.paybeta.ng") {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "P-API-KEY": apiKey,
      },
    });

    this.airtime = new AirtimeService(this.client);
    this.data = new DataService(this.client);
    this.cable = new CableService(this.client);
    this.electricity = new ElectricityService(this.client);
    this.showmax = new ShowmaxService(this.client);
    this.transaction = new TransactionService(this.client);
  }

  public getClient(): AxiosInstance {
    return this.client;
  }
}
