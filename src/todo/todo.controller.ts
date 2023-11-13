import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

@Get()
findAll(): Todo[] {
    return [];
}
}