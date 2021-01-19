import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Student } from './student.model';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { JwtService } from '@nestjs/jwt';
// import { AuthService } from '../utils/auth.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<any>,
      @InjectModel('User') private readonly userModel: Model<any>,
      @InjectModel('Section') private readonly sectionModel:Model<any>,){}

  public async create(student: Student) {
    var student1 = await this.studentModel.create(student);

    return {
      response_code: HttpStatus.OK,
      response_data: student1,
    };
  }

  public async findAll() {
    var students = await this.studentModel.find();
    return {
      response_code: HttpStatus.OK,
      response_data: students,
    };
  }

  public async findOne(id: string) {
    var student = await this.studentModel.findById(id);
    return student;
  }
  public async findUser(id: string) {
    var student1 = await this.studentModel.find({ user: id });
    return {
      response_code: HttpStatus.OK,
      response_data: student1,
    };
  }
  public async findSection(id: string) {
    var students = await this.studentModel.find({ section: id });
    return {
      response_code: HttpStatus.OK,
      response_data: students,
    };
  }

  public async update(id: string, studentdata: Student) {
    var student = this.studentModel.findByIdAndUpdate(id, studentdata);
    return {
      response_code: HttpStatus.OK,
      response_data: student,
    };
  }

  public async remove(id: string) {
    var student = await this.studentModel.findById(id);
    student.remove();
    return {
      response_code: HttpStatus.OK,
      response_data: student,
    };
  }
}
