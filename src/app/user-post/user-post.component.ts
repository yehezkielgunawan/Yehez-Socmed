import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
})
export class UserPostComponent implements OnInit {
  constructor(
    private postService: PostService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  @Output() myEvent = new EventEmitter();

  userProfile: any;
  userPosts: any;
  commentUser: any;

  ngOnInit(): void {
    this.getUserProfile();
    this.getUserPosts();
  }

  getUserProfile(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.postService.getUserData(id).subscribe((userData) => {
      this.userProfile = userData;
      console.log(this.userProfile);
    });
  }

  getUserPosts(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.postService.getUserPosts(id).subscribe((userPostsData) => {
      this.userPosts = userPostsData;
      console.log(this.userPosts.data);
    });
  }

  getCommentUser(id: string): void {
    this.postService.getCommentData(id).subscribe((commentData) => {
      this.commentUser = commentData;
      console.log(this.commentUser.data);
    });
  }
  clearComment() {
    this.commentUser = null;
  }

  goToProfile(id: string) {
    this.router.navigate([`/user/${id}`]);
  }

  goBack(): void {
    this.location.back();
  }
}
