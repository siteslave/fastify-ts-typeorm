import { DataSource, EntityManager, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";

export class UserRepository {

  private user: Repository<UserEntity>;
  private entityManager: EntityManager;

  constructor (private orm: DataSource) {
    this.user = this.orm.getRepository(UserEntity);
    this.entityManager = this.orm.manager;
  }

  async list(): Promise<any> {
    return this.user.findOne({ where: { userId: 1 } });
  }

  async save(data: any): Promise<UserEntity> {
    return this.user.save(data);
  }

  async query(): Promise<UserEntity> {
    return this.entityManager.query("select * from users where user_id=?", [1])
  }

}

