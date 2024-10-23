import { SearchInfoItem } from '../searchInfoItem';

export interface SearchItemResponse {
  config: object;
  data: SearchInfoItem[];
  info: object;
  pagination: object;
}
