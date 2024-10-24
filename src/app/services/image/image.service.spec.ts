import { ImageService } from "./image.service"

describe('Image Service', () => {
    let imageService: ImageService

    beforeEach(() => {
        imageService = new ImageService()
    })

    it('getImageSrc() should return right url to image', () => {
        expect(imageService.getImageSrc('testId1', {width: 60, height: 60})).toBe(
            'https://www.artic.edu/iiif/2/testId1/full/60,60/0/default.jpg'
        ),
        expect(imageService.getImageSrc('testId2', {width: 40, height: 40})).toBe(
            'https://www.artic.edu/iiif/2/testId2/full/40,40/0/default.jpg'
        ),
        expect(imageService.getImageSrc('testId3', {width: 30, height: 40})).toBe(
            'https://www.artic.edu/iiif/2/testId3/full/30,40/0/default.jpg'
        ),
        expect(imageService.getImageSrc('testId4', {width: 40, height: 20})).toBe(
            'https://www.artic.edu/iiif/2/testId4/full/40,20/0/default.jpg'
        ),
        expect(imageService.getImageSrc('testId5', {width: 80, height: 30})).toBe(
            'https://www.artic.edu/iiif/2/testId5/full/80,30/0/default.jpg'
        )
    })

    it('onImageError() should return default path to museum.png', () => {
        expect(imageService.onImageSrcError()).toBe('../../../assets/museum.png')
    })
})