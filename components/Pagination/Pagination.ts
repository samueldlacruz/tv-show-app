export interface PaginationPropsI {
	offset?: number
	total: number
	limitData: number
	onChange?: PaginationOnChangeI
}

export interface PaginationOnChangeI {
	(index: number): void
}

export interface ButtonPaginationPropsI {
	label: string | Function
	totalPagination: number
	offset: number
	callback: Function
	isBack?: boolean
	total?: number
	customClass?: string
}
