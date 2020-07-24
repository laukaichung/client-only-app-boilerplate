import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { tableName } from "../data/TableName";
import { tableColumn } from "../data/TableColumn";
import Match from "./Match";

@Entity()
export default class Event {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column("uuid")
  companyId: string;

  @Column({ type: "int" })
  reputation: number;

  @Column()
  type: string;

  @Column({ type: "int", nullable: true })
  rating?: number;

  @ManyToMany((type) => Match, { eager: true, cascade: true })
  @JoinTable({
    name: tableName.eventMatch,
    joinColumn: {
      name: tableColumn.matchId,
      referencedColumnName: tableColumn.id,
    },
    inverseJoinColumn: {
      name: tableColumn.eventId,
      referencedColumnName: tableColumn.id,
    },
  })
  public matches: Match[];

  public matchIds: string[];
}
