export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let result = []
    for (let i = 0; i < totalPages; i++) { //ToDo useMemo and custom usePagination
        result.push(i + 1)
    }
    return result
}