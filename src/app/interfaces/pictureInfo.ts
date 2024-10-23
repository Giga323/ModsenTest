export interface PictureInfo {
  id: string;
  image_id: string;
  title: string;
  artist_display: string;
  artist_title: string;
  credit_line: string;
  date_display: string;
  department_title: string;
  dimensions: string;
  is_public_domain: boolean;
  place_of_origin: string;
  thumbnail: {
    alt_text: string;
    height: number;
    width: number;
    lquip: string;
  };
}
