import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Company from "./Company";
import { tableColumn } from "../data/TableColumn";
import Worker from "./Worker";

@Entity()
export default class Contract {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((type) => Company, (e) => e.id)
  @JoinColumn({ name: tableColumn.companyId })
  company: Company;

  @Column("uuid")
  companyId: string;

  @ManyToOne((type) => Worker, (e) => e.id)
  @JoinColumn({ name: tableColumn.workerId })
  worker: Worker;

  @Column("uuid")
  workerId: string;

  @Column({ type: "int" })
  // weekly
  salary: number;

  @Column({ type: "timestamp" })
  // weekly
  endTime: Date;

  @Column({ type: "timestamp" })
  // weekly
  startTime: Date;

  // Company's focus on this player. Whether company is willing to push the worker.
  @Column({ type: "int" })
  priority: Date;
}
