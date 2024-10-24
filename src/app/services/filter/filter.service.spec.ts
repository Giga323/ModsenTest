import { FilterService } from "./filter.service";

describe('Filter Service', () => {
    let filterService: FilterService;

    beforeEach(() => {
        filterService = new FilterService();
    });

    it('filterByAlphabet() should return SearchItemInfo array in alphabet order', () => {
        expect(filterService.filterByAlphabet(
            [
                {
                    id: 0,
                    title: 'a image 1',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'c image 2',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'b image 3',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                }
            ]
        )).toBe(
            [
                {
                    id: 0,
                    title: 'a image 1',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'b image 3',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'c image 2',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                }
            ]
        )
    })
})