import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  alertMessage: string = '';
  lstPosts: PostModel[];
  title: string = 'Add Post';
  p: number = 1;

  postModel = new PostModel();

  constructor(private postSertvice: PostService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.loadData();
  }
  addPost() {
    this.postModel = new PostModel();
    this.alertMessage = '';
    this.title = 'Add Post';
  }
  editPost(postModel: PostModel) {
    this.postModel = postModel;
    this.alertMessage = '';
    this.title = ' Edit Post';
  }
  delete(id: number) {
    if (confirm("Are you sure to delete ?")) {
      this.postSertvice.delete(id)
        .subscribe(
          response => {
            console.log(response);
          },
          (error: Response) => {
            if (error.status == 404) {
              this.toastrService.error('The resource your trying to delete in not-found...');
            }
            else {
              this.toastrService.error('Un handled exception occured...');
            }
          }
        );
      let index = this.lstPosts.findIndex(x => x.id == id);
      this.lstPosts.splice(index, 1);
      //this.loadData();
      this.toastrService.success('Post deleted successfully..!');
    }
  }
  savePost() {
    if (this.postModel.id) {
      let id: number = this.postModel.id;
      this.postSertvice.update(this.postModel.id, this.postModel)
        .subscribe(
          response => {

          },
          (error: Response) => {
            if (error.status == 404) {
              this.toastrService.error('The resource your trying to update in not-found...');
            }
            else if (error.status == 400) {
              this.toastrService.error(error.statusText);
            }
            else {
              this.toastrService.error('Un handled exception occured...');
            }
          }
        );
      let index = this.lstPosts.findIndex(x => x.id == id);
      this.lstPosts[index] = this.postModel;
      this.toastrService.success('Post updated successfully..!');
      //this.alertMessage = 'Post updated successfully..!';
    }
    else {
      this.postSertvice.create(this.postModel)
        .subscribe(
          response => {
            this.lstPosts.push(response as PostModel);
          },
          (error: Response) => {
            if (error.status == 400) {
              //Known exception
              this.toastrService.error(error.statusText);
            }
            else if (error.status == 401) {
              this.toastrService.error('Un-authorized...');
            }
            else {
              this.toastrService.error('Un handled exception occured...');
              //un-known exception
            }
          }
        )
      //this.alertMessage = 'Post created successfully..!';
      this.toastrService.success('Post created successfully..!');
    }
    this.postModel = new PostModel();
    //this.loadData();
  }
  loadData() {
    this.postSertvice.getAll()
      .subscribe(
        response => {
          this.lstPosts = response as PostModel[];
        },
        (error: Response) => {
          console.log(error);
          //this.toastrService.error(error.statusText);
          if (error.status == 404) {
            this.toastrService.error('The post(s) not found.');
          }
          else {
            this.toastrService.error('Un handled exception occured...');
          }
        }
      )
  }
}
