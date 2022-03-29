import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  id: string | undefined
  post: any

  postForm: FormGroup
  constructor(private router: Router, private activeRoute: ActivatedRoute, private postService: PostService) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      status: new FormControl(0)
    })
  }


  ngOnInit(): void {

  }
  onSubmit(obj: { title: string, content: string, status: string }) {
    return this.postService.createPost(obj).subscribe((data) => {
      this.router.navigate(["/posts"])
    })
  }

}
