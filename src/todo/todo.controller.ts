import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Post, Put, Res, HttpStatus } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Response } from 'express';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
    private readonly logger = new Logger(TodoController.name);

    constructor(private readonly todoService: TodoService) {}

    @Post()
    async create(@Body() todo: Todo, @Res() res: Response): Promise<void> {
        this.logger.log('Handling create() request...');
        try {
          const createdTodo = await this.todoService.create(todo);
          res.status(HttpStatus.CREATED).json(createdTodo); // Send a success response with the created Todo
        } catch (error) {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Unable to create Todo' });
        }
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

     @Put(':id')
     update(@Param('id', ParseIntPipe) id: number, @Body() todo: Todo): void {
        this.logger.log('handling update() request with id =' + id + '...');
        return this.todoService.update(id, todo);
    }
    
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): void {
        this.logger.log('Handling remove() request with id=' + id + '...');
        return this.todoService.remove(id);
    }
}