export interface Post{
     id : number;
     title : string;
     optionalText : string ;
     upvotes : number;
     postedAt : string ;
     hasBeenEdited : boolean ;
     comments : number;

     originalPoster : string ;
     posterId : string ;
     communityId : number ;
}