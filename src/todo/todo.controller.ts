import { Body, Controller, Get, Logger, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
    private readonly logger = new Logger(TodoController.name);

    constructor(private readonly todoService: TodoService) {}

    @Post()
    create(@Body() todo: Todo): void {
        this.logger.log('Handling create() request... ');
        return this.todoService.create(todo);
    }

    @Get()
    findAll(): Todo[] {
        this.logger.log('Handling create() request...');
        return this.todoService.findAll();
    }

    @Get(':id')
     findOne(@Param('id', ParseIntPipe) id: number): Todo {
        this.logger.log('Handling findOne() request with id=' + id + '...');
        return this.todoService.findOne(id);
     }
}