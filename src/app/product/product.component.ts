import { Component, OnInit } from '@angular/core';
import { Obj } from '@popperjs/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product = Array()

  arrayFiler = this.product


  newProduct =
    {
      id: 0,
      name: "",
      desc: "",
      price: 0
    }

  // thêm
  onSubmit(data: any) {
    // validate
    if (!this.onValidate(this.newProduct)) {
      return
    }
    if (this.isEdit) {

      for (let i = 0; i < this.product.length; i++) {
        if (this.product[i].id === this.newProduct.id) {
          this.product[i] = this.newProduct
        }
      }
      this.isEdit = false
    }
    else {
      data.id = this.product.length + 1
      this.product.push(data)

    }
    this.newProduct =
    {
      id: 0,
      name: "",
      desc: "",
      price: 0
    }

  }


  // xóa
  remove(id: number) {
    this.arrayFiler = this.arrayFiler.filter(function (prod) {
      return prod.id !== id
    })
  }
  // sửa
  isEdit = false
  // lấy dữ liệu ra ô edit
  onEdit(prod: any) {
    this.newProduct = prod
    this.isEdit = true
  }
  // validate
  onValidate(obj: any) {
    if (!obj.name || !obj.price || obj.price <= "0" || !obj.desc) {
      return false;
    }
    return true
  }


}







