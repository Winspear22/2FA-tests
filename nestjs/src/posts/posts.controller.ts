import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import PostsService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';


@Controller('posts')
export default class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}

}