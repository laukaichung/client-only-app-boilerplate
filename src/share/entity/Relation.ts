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
export default class Relation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: string;

  @UpdateDateColumn()
  updated: Date;

  @CreateDateColumn()
  created: Date;

  @ManyToMany((type) => Worker, { eager: true, cascade: true })
  @JoinTable({
    name: tableName.workerRelation,
    joinColumn: {
      name: "relationId",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: tableColumn.workerId,
      referencedColumnName: "id",
    },
  })
  public workers: Worker[];

  public workerIds: string[];
}
