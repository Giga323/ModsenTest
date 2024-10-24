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
        )).toEqual(
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
        ),
        expect(filterService.filterByAlphabet(
            [
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Image',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Secure',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Citro',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 4,
                    title: 'Alexandro',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                }
            ]
        )).toEqual(
            [
                {
                    id: 4,
                    title: 'Alexandro',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Citro',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Image',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Secure',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                }
            ]
        ),
        expect(filterService.filterByAlphabet(
            [
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Afro',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Ace',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Cymbals',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 4,
                    title: 'Picture',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                }
            ]
        )).toEqual(
            [
                {
                    id: 2,
                    title: 'Ace',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Afro',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Cymbals',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 4,
                    title: 'Picture',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                }
            ]
        )
    })

    it('filterByData() should return SearchInfoItem array in ascending order', () => {
        expect(filterService.filterByDate(
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
        )).toEqual(
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
        ),
        expect(filterService.filterByAlphabet(
            [
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Image',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Secure',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Citro',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 4,
                    title: 'Alexandro',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                }
            ]
        )).toEqual(
            [
                {
                    id: 4,
                    title: 'Alexandro',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Citro',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Image',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Secure',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                }
            ]
        ),
        expect(filterService.filterByDate(
            [
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Afro',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Ace',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-11-27T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Cymbals',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 4,
                    title: 'Picture',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-01T00:00:00Z"
                }
            ]
        )).toEqual(
            [
                {
                    id: 4,
                    title: 'Picture',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-01T00:00:00Z"
                },
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-10-22T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Afro',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-10-23T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Cymbals',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Ace',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-11-27T00:00:00Z"
                }
            ]
        ),
        expect(filterService.filterByDate(
            [
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-01-22T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Afro',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-12-23T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Ace',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-09-27T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Cymbals',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 4,
                    title: 'Picture',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-01T00:00:00Z"
                }
            ]
        )).toEqual(
            [
                {
                    id: 0,
                    title: 'Artist',
                    artist_title: 'artist 1',
                    image_id: 'image id 1',
                    is_public_domain: true,
                    timestamp: "2023-01-22T00:00:00Z"
                },
                {
                    id: 2,
                    title: 'Ace',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-09-27T00:00:00Z"
                },
                {
                    id: 4,
                    title: 'Picture',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-01T00:00:00Z"
                },
                {
                    id: 3,
                    title: 'Cymbals',
                    artist_title: 'artist 3',
                    image_id: 'image id 3',
                    is_public_domain: false,
                    timestamp: "2023-10-27T00:00:00Z"
                },
                {
                    id: 1,
                    title: 'Afro',
                    artist_title: 'artist 2',
                    image_id: 'image id 2',
                    is_public_domain: false,
                    timestamp: "2023-12-23T00:00:00Z"
                }
            ]
        )
    })
})