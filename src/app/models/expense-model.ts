export interface Expense {
    id?: number,
    description: string,
    value: number,
    creationDate: Date,
    categoryId: number,
    userId: number
}