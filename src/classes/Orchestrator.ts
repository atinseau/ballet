import type { ADance } from "./ADance"

type OrchestratorRegisterOptions = {
  dances: ADance[]
}

export class Orchestrator {

  private constructor(
    private readonly dances: ADance[]
  ) {}

  static register(options: OrchestratorRegisterOptions) {
    return new Orchestrator(options.dances)
  }

  public start(dance: ADance) {
    const currentDance = this.dances.find((d) => dance === d)

    console.log(currentDance)

  }

}