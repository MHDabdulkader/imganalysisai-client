export interface IFetch{
    status: number,
    success: boolean,
    message: string
}

export interface IFetchData<T> extends IFetch{
    data: T
}

export interface IFetchArray<T> extends IFetch{
    data: T[];
}

export interface Pagination<T> extends IFetch{
    data:{
        data: T[];
        current_page: 1,
        total_pages: 1,
        total_item: 2,
        limit: 10
    }
}