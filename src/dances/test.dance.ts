import { Act } from "../decorators/act.decorator"
import { Dance } from "../decorators/dance.decorator"
import { Graph } from "../classes/Graph"
import { ADance } from "../classes/ADance"

const graph = new Graph<string>()

/**
 * 
 * onNewLead
 *  -> createUser
 *    -> updateUser -------
 *    -> sendEmail          \______ reset
 *    -> onUserConfirmed    /
 *      -> deleteUser  -----
 */

// Next edges for onNewLead
graph.addEdge('onNewLead', 'createUser')

// Next edges for createUser
graph.addEdge('createUser', 'updateUser')
graph.addEdge('createUser', 'sendEmail')
graph.addEdge('createUser', 'onUserConfirmed')

// Next edges for updateUser
graph.addEdge('updateUser', 'reset')

// Next edges for onUserConfirmed
graph.addEdge('onUserConfirmed', 'deleteUser')

// Next edges for deleteUser
graph.addEdge('deleteUser', 'reset')


@Dance({
  name: "test",
  graph
})
export class TestDance extends ADance {

  @Act('action')
  deleteUser() {
    console.log('deleteUser')
  }

  @Act('action')
  createUser() {
    console.log('createUser')
  }

  @Act('action')
  updateUser() {
    console.log('updateUser')
  }

  @Act('action')
  sendEmail() {
    console.log('sendEmail')
  }

  @Act('action')
  reset() {
    console.log('reset')
  }

  @Act('event')
  onUserConfirmed() {
    console.log('onUserConfirmed')
  }

  @Act('event')
  onNewLead() {
    console.log('onNewLead')
  }
}