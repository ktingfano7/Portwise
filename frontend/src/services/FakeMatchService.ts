export type MatchResult = {
    shipId: string;
    cargo: string;
    etaDays: number;
    voyagePlan: string;
  };
  
  export class FakeMatchService {
    static match(cargo: string): MatchResult | null {
      switch (cargo) {
        case "Brazil Soybeans":
          return {
            shipId: "BW123",
            cargo: "Brazil Soybeans",
            etaDays: 27,
            voyagePlan: "Santos → Singapore → Guangzhou",
          };
        case "Indonesian Coal":
          return {
            shipId: "IC998",
            cargo: "Indonesian Coal",
            etaDays: 15,
            voyagePlan: "Samarinda → Manila → Tianjin",
          };
        default:
          return null;
      }
    }
  }
  