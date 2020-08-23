import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-post',
  templateUrl: './tag-post.component.html',
  styleUrls: ['./tag-post.component.css'],
})
export class TagPostComponent implements OnInit {
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  postTag: any;
  commentTag: any;
  tagKey: string;

  ngOnInit(): void {
    this.getTagPost();
  }

  getTagPost(): void {
    const tag: string = this.route.snapshot.paramMap.get('tagid');
    this.tagKey = tag;
    this.postService.getPostTag(tag).subscribe((postTagData) => {
      this.postTag = postTagData;
      console.log(this.postTag);
    });
  }

  getCommentTag(postID): void{
    this.postService.getCommentData(postID).subscribe((commentData) => {
      this.commentTag = commentData;
      console.log(this.commentTag.data);
    });
  }

  clearComment(){
    this.commentTag = null;
  }
}
