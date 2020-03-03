import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Parent } from './parent'

@Entity()
export class Child {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @ManyToOne(
    type => Parent,
    parent => parent.children
  )
  parent: Parent
}
