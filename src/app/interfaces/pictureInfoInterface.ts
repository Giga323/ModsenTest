export interface PictureInfoInterface {
    id: number,
    title: string,
    thumbnail: {
        lqip: string;
        width: number;
        height: number;
        alt_text: string;
    },
    date_display: string,
    artist_title: string,
    artist_display: string,
    dimensions: string,
    credit_line: string,
    place_of_origin: string
}