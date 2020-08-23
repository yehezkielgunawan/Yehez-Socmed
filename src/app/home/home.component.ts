import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any;
  comments: any;
  tagList: any;

  constructor(private postService: PostService,
    private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.getPosts();
    this.getTagList();
  }

  getPosts(): void {
    this.postService.getPostsData().subscribe((postList) => {
      this.posts = postList;
      console.log(this.posts.data);
    });
  }

  getComment(postID: string): void {
    this.postService.getCommentData(postID).subscribe((commentData) => {
      this.comments = commentData;
      console.log(this.comments.data);
    });
  }

  getTagList(): void{
    this.postService.getTagList().subscribe((tagListData) => {
      this.tagList = tagListData;
      console.log(this.tagList);
    })
  }

  selected(tag:string): void{
    console.log(tag);
    this.router.navigate([`/tagpost/${tag}`]);
  }

  clearComment(){
    this.comments = null;
  }
}
