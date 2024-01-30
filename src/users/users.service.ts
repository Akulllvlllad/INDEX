
import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2'


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ){}

  async create({ email, password }: CreateUserDto){
    const isExist = await this.userRepository.findOne({
      where: { email }
    })

    if(isExist) throw new BadGatewayException('This email already exist!')

    const user = await this.userRepository.save({ 
      email, 
      password: await argon2.hash(password)
    })

    return { user }
  }

  async findAll(){
  }
  async findOneByEmail(email: string): Promise<User | null>{
    const user = await this.userRepository.findOne({
      where: { email }
    })
    return user
  }
}