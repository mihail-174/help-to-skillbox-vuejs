export class MemoryStorage<T> {
    private data:  T[] = []
    constructor(data: T[] = []) {
        this.data = data
    }
    list() {
        return this.data
    }
}