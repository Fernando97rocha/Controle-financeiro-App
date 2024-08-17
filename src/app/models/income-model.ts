export interface Income {
    id?: number,
    description: string,
    value: number,
    creationDate?: Date,
    category: string,
    categoryId: number,
    userId?: number
}