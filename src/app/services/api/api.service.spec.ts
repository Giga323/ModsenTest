import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { PictureInfoResponse } from '@app/interfaces/responses/pictureInfoResponse';
import { SearchItemResponse } from '@app/interfaces/responses/searchItemResponse';

describe('Burger-menu component', () => {
    let service: ApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ApiService],
    });
        service = TestBed.inject(ApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    
    it('should fetch picture', () => {
        const mockResponse: PictureInfoResponse = {
            "data": {
                "id": "129884",
                "title": "Starry Night and the Astronauts",
                "thumbnail": {
                    "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAABw/Zhg/aBRBaBZBahRCaxxBahxEahNIchZJcR9LdB9OdiZIZSBEbShLbjxRZyBPeipRcSpReUpWaitXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoMJIDhJAywAcAlEkxhNNTQgAOw==",
                    "width": 5376,
                    "height": 6112,
                    "alt_text": "Abstract painting composed of small vertical dabs of multiple shades of blue with a small area of similar strokes of red, orange, and yellow in the upper right."
                },
                "date_display": "1972",
                "artist_display": "Alma Thomas\nAmerican, 1891–1978",
                "place_of_origin": "United States",
                "dimensions": "152.4 × 134.6 cm (60 × 53 in.)",
                "credit_line": "Purchased with funds provided by Mary P. Hines in memory of her mother, Frances W. Pick",
                "is_public_domain": false,
                "department_title": "Contemporary Art",
                "artist_title": "Alma Thomas",
                "image_id": "e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9"
            },
            "info": {
                "license_text": "The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
                "license_links": [
                    "https://creativecommons.org/publicdomain/zero/1.0/",
                    "https://www.artic.edu/terms"
                ],
                "version": "1.10"
            },
            "config": {
                "iiif_url": "https://www.artic.edu/iiif/2",
                "website_url": "http://www.artic.edu"
            }
        };

        service.getPictureInfo(129884).subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${service.linkApi}${service.artworks}/${129884}?fields=${service.returnedMoreFields}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });  

    it('should fetch picture by name', () => {
        const mockResponse: SearchItemResponse = {
            "preference": null,
            "pagination": {
                "total": 41877,
            "limit": 5,
        "offset": 0,
        "total_pages": 8376,
        "current_page": 1
    },
    "data": [
        {
            "_score": 116.22516,
            "artist_title": "Art Shay",
            "id": 191358,
            "image_id": "d141a769-24af-ff07-d792-183ae73ae765",
            "title": "Nelson Algren Pauses after Another White Sox Loss, Chicago",
            "timestamp": "2024-10-23T22:58:02-05:00"
        },
        {
            "_score": 116.15453,
            "artist_title": "Art Sinsabaugh",
            "id": 18975,
            "image_id": "5643d48a-180e-06c0-8d9f-5319d62c1cb3",
            "title": "Midwest Landscape #73",
            "timestamp": "2024-10-23T22:16:12-05:00"
        },
        {
            "_score": 115.19211,
            "artist_title": "Art Shay",
            "id": 191353,
            "image_id": "2658eeb4-ad05-9fb5-5f2e-1fd8ffee9ce0",
            "title": "Nelson Algren, by his Favorite Division St. Bar, Chicago",
            "timestamp": "2024-10-23T22:58:02-05:00"
        },
        {
            "_score": 99.33953,
            "artist_title": "Art Shay",
            "id": 191355,
            "image_id": "bb5e3048-64e5-be99-c575-f89607cd55a9",
            "title": "Nelson Algren Amuses a New Friend",
            "timestamp": "2024-10-23T22:58:02-05:00"
        },
        {
            "_score": 96.04619,
            "artist_title": "Art Spiegelman",
            "id": 148407,
            "image_id": "45b40211-18e7-1153-1b7d-18ddc0272d23",
            "title": "Crossroads",
            "timestamp": "2024-10-23T22:51:45-05:00"
        }
    ],
    "info": {
        "license_text": "The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
        "license_links": [
            "https://creativecommons.org/publicdomain/zero/1.0/",
            "https://www.artic.edu/terms"
        ],
        "version": "1.10"
    },
    "config": {
        "iiif_url": "https://www.artic.edu/iiif/2",
        "website_url": "http://www.artic.edu"
    }
        };

        service.searchByPictureName('art').subscribe((response) => {
            expect(response).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`${service.linkApi}${service.artworks}/search?q=art&fields=id,title,artist_title,image_id,date,timestamp&limit=5`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });  
})