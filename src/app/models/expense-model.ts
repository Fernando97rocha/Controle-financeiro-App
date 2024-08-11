export interface Expense {
    id?: number,
    description: string,
    value: number,
    creationDate?: Date,
    category?: string,
    categoryId?: number,
    userId?: number
}