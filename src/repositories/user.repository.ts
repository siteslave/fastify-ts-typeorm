import { DataSource, EntityManager, Like, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";

export class UserRepository {

  private user: Repository<UserEntity>;
  private entityManager: EntityManager;

  constructor (private orm: DataSource) {
    this.user = this.orm.getRepository(UserEntity);
    this.entityManager = this.orm.manager;
  }

  async login(username: any, password: any): Promise<any> {
    return this.user.findOne({ where: { username, password } });
  }

  async list(): Promise<UserEntity[]> {
    return this.user.find();
  }

  async search(query: any): Promise<any> {
    var _query = `%${query}%`;
    return this.user.find({ where: { firstName: Like(_query) } })
  }

  async save(data: any): Promise<UserEntity> {
    return this.user.save(data);
  }

  async update(userId: any, firstName: any, lastName: any, sex: any): Promise<any> {
    return this.orm.createQueryBuilder()
      .update(UserEntity)
      .set({
        firstName,
        lastName,
        sex,
      }).where("user_id = :userId", { userId }).execute();
  }

  async query(): Promise<UserEntity> {
    return this.entityManager.query("select * from users where user_id=?", [1])
  }

  async delete(userId: any): Promise<any> {
    return this.user.delete({ userId })
  }

}

