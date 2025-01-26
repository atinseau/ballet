import "reflect-metadata";

import { Graph } from "./Graph"
import { EventEmitter2 } from "eventemitter2"
import { TestDance } from "./test.dance";
import { DANCE_METADATA_KEY } from "./constants";

const emitter = new EventEmitter2()

const testDance = new TestDance()
