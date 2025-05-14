import { Injectable } from '@nestjs/common';

//making this service/class Injectable makes it a singleton that can be shared across the application
@Injectable()
export class TasksService {}
