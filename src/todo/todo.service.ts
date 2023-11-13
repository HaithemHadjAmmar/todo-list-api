import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
    private storage: Todo[] = [];

    findAll(): Todo[] {
        return this.storage;
    }
} 