import { MigrationInterface, QueryRunner, getRepository, getConnection } from 'typeorm'
import { Parent, Child } from '../entities'

const SEED_PARENT = [
  {
    name: '차범근',
    children: [
      {
        name: '차하나'
      },
      {
        name: '차두리'
      },
      {
        name: '차세찌'
      }
    ]
  },
  {
    name: '송일국',
    children: [
      {
        name: '송대한'
      },
      {
        name: '송민국'
      },
      {
        name: '송만세'
      }
    ]
  }
]

export class SeedParent1583286600717 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    try {
      SEED_PARENT.forEach(async parent => {
        var children = []
        var p = await getRepository(Parent).save({
          ...parent,
          children: null
        })

        parent?.children?.forEach(async child => {
          children.push(await getRepository(Child).save({ ...child, parent: p }))
        })

        // p.children = children
        // await getRepository(Parent).save(p)
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Parent)

    SEED_PARENT.reverse().forEach(async parent => {
      let recode = await repository.findOne({ name: parent.name })
      await repository.remove(recode)
    })
  }
}
