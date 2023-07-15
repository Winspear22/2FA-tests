import { Injectable } from '@nestjs/common';
import User from 'src/users/user.entity';
import { CreatePostDto } from  './dto/createPost.dto'

@Injectable()
export default class PostsService {

    async createPost(post: CreatePostDto, user: User) {}
}