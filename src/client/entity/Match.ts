import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Worker from "./Worker";
import { tableName } from "../data/TableName";
import { tableColumn } from "../data/TableColumn";

@Entity()
export default class Match {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "int", nullable: true })
  rating?: number;

  @ManyToMany((type) => Worker, { eager: true, cascade: true })
  @JoinTable({
    name: tableName.workerMatch,
    joinColumn: {
      name: tableColumn.matchId,
      referencedColumnName: tableColumn.id,
    },
    inverseJoinColumn: {
      name: tableColumn.workerId,
      referencedColumnName: tableColumn.id,
    },
  })
  public workers: Worker[];

  public workerIds: string[];
}
