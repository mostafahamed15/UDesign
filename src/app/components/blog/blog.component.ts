import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public posts: PostsResponse =  {
    top:[],
    base_url:null
  };;

  constructor(private postsService:PostsService) { 
  	      this.postsService.index().subscribe(res => {
        this.posts = res['data'];
        console.log('work as dangerious');
      },err => console.log(err));

  }

  ngOnInit() {
  }

}
interface PostsResponse{
  top:any[];
  base_url:string;
}
