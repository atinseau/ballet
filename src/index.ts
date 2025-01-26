// TODO: move this line
import "reflect-metadata"

import { Orchestrator } from "./classes/Orchestrator";
import { TestDance } from "./dances/test.dance";

class Test {}

const orchestrator = Orchestrator.register({
  dances: [TestDance, Test]
})


orchestrator.start(TestDance)