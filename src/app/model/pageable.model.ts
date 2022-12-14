import { ISort } from './sort.model';

export interface IPageable {
    sort?: ISort;
    pageSize?: number;
    pageNumber?: number;
    offset?: number;
    paged?: boolean;
    unpaged?: boolean;
}

export class Pageable implements IPageable {
    constructor(
        public sort?: ISort,
        public pageSize?: number,
        public pageNumber?: number,
        public offset?: number,
        public paged?: boolean,
        public unpaged?: boolean,
    ) { }
}
