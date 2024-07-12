import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Subscription')
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'PublicId' })
  publicId: string;

  @Column({ name: 'Code' })
  code: string;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'Status' })
  status: string;

  @Column({ name: 'CreationDate', type: 'datetime' })
  creationDate: Date;

  @Column({ name: 'Hosts' })
  hosts: string;

  @Column({ name: 'Master' })
  master: boolean;

  @Column({ name: 'LandingPage' })
  landingPage: string;

  @Column({ name: 'LogoId' })
  logoId: number;

  @Column({ name: 'LogoIconId' })
  logoIconId: number;

  @Column({ name: 'Type' })
  type: string;

  @Column({ name: 'OrganizationId' })
  organizationId: number;

  @Column({ name: 'ConnectionStringKey' })
  connectionStringKey: string;

  @Column({ name: 'TriggerSyncTime', type: 'datetime' })
  triggerSyncTime: Date;
}
