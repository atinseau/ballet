export class Graph<T> {
  private readonly nodes: T[] = []
  private readonly edges: Map<T, T[]> = new Map()

  addNode(node: T) {
    this.nodes.push(node)
  }

  addEdge(from: T, to: T) {
    if (!this.nodes.includes(from)) {
      this.addNode(from)
    }

    if (!this.nodes.includes(to)) {
      this.addNode(to)
    }

    if (!this.edges.has(from)) {
      this.edges.set(from, [])
    }
    this.edges.get(from)?.push(to)
  }

  next(node?: T): T[] {
    // If no node is provided, return every first node in the graph
    // so every node that as no prev node
    if (!node) {
      return this.nodes.filter((n) => !this.nodes.some((m) => this.edges.get(m)?.includes(n) ?? false))
    }
    return this.edges.get(node) ?? []
  }

  prev(node?: T): T[] {
    // Return every last node if no node is provided
    if (!node) {
      return this.nodes.filter((n) => !this.edges.has(n))
    }
    return this.nodes.filter((n) => this.edges.get(n)?.includes(node) ?? false)
  }
}