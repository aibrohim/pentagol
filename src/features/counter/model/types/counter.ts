export interface CounterSchema {
  value: number;
  status: "idle" | "loading" | "failed";
}
