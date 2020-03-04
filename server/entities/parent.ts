import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm'
import { Child } from './child'

@Entity()
export class Parent {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(
    type => Child,
    child => child.parent,
    {
      nullable: true
    }
  )
  @JoinTable()
  children: Promise<Child[]>
}
