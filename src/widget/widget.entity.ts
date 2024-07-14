import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Widgets')
export class Widget {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uid

  @Column({ type: 'int' })
  publicId: number; // int

  @Column({ type: 'nvarchar', length: 50 })
  status: string; // nvarchar50

  @Column({ type: 'nvarchar', length: 50 })
  description: string; // nvarchar50

  @Column({ type: 'int' })
  creationDate: number; // int (assuming this is a timestamp, adjust if needed)

  @Column({ type: 'datetime' })
  lastModified: Date; // datetime

  @Column({ type: 'nvarchar', length: 'max' })
  mainContent: string; // nvarcharmax

  @Column({ type: 'bit' })
  order: boolean; // bit

  @Column({ type: 'uuid' })
  dataSource: string; // uid

  @Column({ type: 'uuid' })
  viewOptions: string; // uid

  @Column({ type: 'uuid' })
  platform: string; // uid

  @Column({ type: 'nvarchar', length: 'max' })
  target: string; // nvarcharmax

  @Column({ type: 'uuid' })
  structure: string; // uid

  @Column({ type: 'nvarchar', length: 100 })
  subscriptionId: string; // nvarchar100

  @Column({ type: 'datetime' })
  code: Date; // datetime

  @Column({ type: 'datetime' })
  triggerSyncTime: Date; // datetime
}
