import { defaultPageSize, defaultPageNumber } from '../constants/strings';

export interface IPageInfo {
  cursor?: string | number;
  pageSize: number;
  pageNumber?: number;
  totalPages?: number;
  hasNext: boolean;
  nextDataAvailable?: boolean;
}

export class PageInfo {
  pageNumber = defaultPageNumber;
  pageSize = defaultPageSize;
  totalPages;
  cursor;
  nextDataAvailable;
  hasNext= false;
  constructor(pageDetail: IPageInfo) {
    this.pageNumber = pageDetail.pageNumber || defaultPageNumber;
    this.pageSize = pageDetail.pageSize;
    this.totalPages = pageDetail.totalPages;
    this.cursor = pageDetail.cursor;
    this.hasNext = pageDetail.hasNext;
    this.nextDataAvailable = pageDetail.nextDataAvailable;
  }
}
