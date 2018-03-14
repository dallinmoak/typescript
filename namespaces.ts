namespace Blog {
  export interface IPost {
    title: string;
    body: string;
  }
  
  export class Post implements IPost{
    title: string;
    body: string;
    constructor(post: IPost){
      this.title = post.title;
      this.body = post.body;
    }
    printPost(){
      console.log(this.title);
      console.log(this.body);
    }
  }
}

namespace Content {
  export interface IPost {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;
  }
  
  export class Post implements IPost{
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;
    constructor(post: IPost){
      this.title = post.title;
      this.body = post.body;
    }
    printPost(){
      console.log(this.title);
      console.log(this.body);
    }
  }
}

var blogPost = new Blog.Post({
  title: "my great title",
  body: "some content"
})

blogPost.printPost();