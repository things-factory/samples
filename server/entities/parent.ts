import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Child } from './child'

@Entity()
export class Parent {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @OneToMany(
    type => Child,
    child => child.parent
  )
  children: Promise<Child[]>
}
