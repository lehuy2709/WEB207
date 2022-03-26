import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  id: string | undefined
  student: any
  constructor(private router: Router, private activateRoute: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.studentService.getStudent(this.id).subscribe((data => {
      this.student = data
    }))
  }
  onSubmit(obj: { name: string, class: string }) {
    //return thoát khỏi hàm
    if (this.id) {
      return this.studentService.updateStudent(this.id, obj).subscribe((data) => {
        this.router.navigate(['/student', this.id])
      })
    }
    return this.studentService.createStudent(obj).subscribe((data) => {
      // sử dụng router navigate  để gọi lại trang danh sách
      this.router.navigate(['/student'])
    })
  }

}
