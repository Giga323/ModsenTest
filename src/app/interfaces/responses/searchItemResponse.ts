import { SearchInfoItem } from '../searchInfoItem';

export interface SearchItemResponse {
  preference: null,
  config: object;
  data: SearchInfoItem[];
  info: object;
  pagination: object;
}
