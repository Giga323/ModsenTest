import{aa as r,h as e,k as s}from"./chunk-WAWHM7R6.js";var n=(()=>{class i{constructor(t){this.http=t,this.pageLimit=3,this.otherPicturesLimit=9,this.returnedLessFields=["id","title","artist_title","image_id","is_public_domain"],this.returnedMoreFields=["id","title","thumbnail","date_display","artist_title","image_id","artist_display","dimensions","credit_line","place_of_origin","is_public_domain","department_title"],this.linkApi="https://api.artic.edu/api/v1",this.artworks="/artworks",this.artists="/artist"}getPage(t){return this.http.get(`${this.linkApi}${this.artworks}/?page=${t}&limit=${this.pageLimit}&fields=${this.returnedLessFields}`)}getOtherPictures(){return this.http.get(`${this.linkApi}${this.artworks}/?limit=${this.otherPicturesLimit}&fields=${this.returnedLessFields}`)}getPictureInfo(t){return this.http.get(`${this.linkApi}${this.artworks}/${t}?fields=${this.returnedMoreFields}`)}searchByPictureName(t){return this.http.get(`${this.linkApi}${this.artworks}/search?q=${t}&fields=id,title,artist_title,image_id,date,timestamp&limit=5`)}static{this.\u0275fac=function(a){return new(a||i)(s(r))}}static{this.\u0275prov=e({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{n as a};