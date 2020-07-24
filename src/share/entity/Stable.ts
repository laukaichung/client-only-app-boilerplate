import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Worker from "./Worker";
import { tableName } from "../data/TableName";
import { tableColumn } from "../data/TableColumn";

@Entity()
export default class Stable {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  text: string;

  @UpdateDateColumn()
  updated: Date;

  @CreateDateColumn()
  created: Date;

  @ManyToMany((type) => Worker, { eager: true, cascade: true })
  @JoinTable({
    name: tableName.workerStable,
    joinColumn: {
      name: tableColumn.stableId,
      referencedColumnName: tableColumn.id,
    },
    inverseJoinColumn: {
      name: tableColumn.workerId,
      referencedColumnName: tableColumn.id,
    },
  })
  public workers: Worker[];

  public workerIds: string[];

  @Column("uuid", { nullable: true })
  companyId: string;
}
