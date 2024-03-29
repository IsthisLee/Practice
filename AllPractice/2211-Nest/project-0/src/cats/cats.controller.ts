import { PositiveIntPipe } from './../common/pipes/positiveInt.pipe';
import { CatsService } from './cats.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('cats')
// @UseInterceptors(SuccessInterceptor) // interceptor DI
// @UseFilters(HttpExceptionFilter) // exception filter DI
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    console.log('hello controller');
    return 'get all cats';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    // console.log(typeof param);
    return 'get one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCate() {
    return 'delete cat';
  }
}
