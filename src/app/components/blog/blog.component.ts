import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public posts: PostsResponse;

  constructor(private postsService:PostsService) { 
  	      this.postsService.topPosts().subscribe(res => {
        this.posts = res['data']
      },err => console.log(err));

  }

  ngOnInit() {
  }

}
interface PostsResponse{
  top:any[];
  base_url:string;
}
