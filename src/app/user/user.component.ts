import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: "huylvph14795",
      age: 19,
      phone: "093131358",
      avatar: "https://sohbetv1.com/wp-content/uploads/2019/06/NGUYEN_BA_NGOC2349_ZING.jpg"
    },
    {
      id: 2,
      name: "huylvph14796",
      age: 29,
      phone: "093131358",
      avatar: "https://sohbetv1.com/wp-content/uploads/2019/06/NGUYEN_BA_NGOC2349_ZING.jpg"
    },
    {
      id: 3,
      name: "huylvph147915",
      age: 39,
      phone: "093131358",
      avatar: "https://sohbetv1.com/wp-content/uploads/2019/06/NGUYEN_BA_NGOC2349_ZING.jpg"
    }
  ]
  // đn 1 mảng trung gian lưu kq search để ko bị ảnh hưởng đến gtri ban đầu
  userFilter = this.users
  // định nghĩa hàm xóa khi click nút delete

  remove(userId: number) {
    this.userFilter = this.userFilter.filter(function (user) {
      return user.id !== userId
    })
  }
  // đn hàm search sau khi nhập vào ô input

  // onchange onsearch chỉ là do mình đặt ko phải hàm mặc định
  onSearch(event: any) {
    const value = event.target.value
    const lowerCaseInputValue = value.toLowerCase()
    const lowerCaseTrumInputValue = lowerCaseInputValue.trim()
    // 1. xu ly viec tim kiem hoa thuong
    // 2. bo khoang trang dau va cuối của value
    // gán userFiler để ko change cái array cũ
    this.userFilter = this.users.filter(function (user) {
      const lowerCaseUserName = user.name.toLowerCase()

      return lowerCaseUserName.indexOf(lowerCaseTrumInputValue) !== -1
    })
  }
  // them moi user 
  newUser = {
    id: 0,
    name: "",
    age: 0,
    phone: "",
    avatar: ""

  }

  onChange(event: any, key: string) {
    //  this.newUser.id  = this.users.length + 1
    this.newUser = {
      // js spread operator
      ...this.newUser,
      [key]: event.target.value

    }

  }
  onSubmit() {
    // validate
    if (!this.onValidate(this.newUser)) {
      return
    }
    //ktra xem có phải đang sửa không
    if (this.isEdit) {
      // gán giá trị mới cho mảng
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.newUser.id) {
          this.users[i] = this.newUser
        }
      }
      // đưa isEdit về giá trị gốc là false để có thể thêm mới
      this.isEdit = false

    }
    else {
      // gán id
      this.newUser.id = this.users.length + 1
      // push
      this.users.push(this.newUser)
    }
    // gán lại gtri gốc cho new User
    this.newUser = {
      id: 0,
      name: "",
      age: 0,
      phone: "",
      avatar: ""
    }
  }

  onValidate(obj: any) {
    if (!obj.name || !obj.age || obj.age <= "0" || !obj.phone || !obj.avatar) {
      return false;
    }
    return true
  }

  // end thêm mới user

  // sửa 
  isEdit = false

  onEdit(obj: any) {
    // gán dl cần sửa vào new user
    this.newUser = obj
    // chuyển trạng thái eddang sửa thành true
    this.isEdit = true
    // sai đó sẽ xử lí tiếp ở onsubmit 
    console.log(this.newUser);



  }


}
