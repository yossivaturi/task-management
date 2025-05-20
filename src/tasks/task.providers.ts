import { DataSource } from 'typeorm';
import { Task } from '../tasks/task.entity';

export const taskProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: ['DATA_SOURCE'],
  },
];

// TODO:Warning In the real-world applications you should avoid magic strings. Both PHOTO_REPOSITORY and DATA_SOURCE should be kept in the separated constants.ts file.
