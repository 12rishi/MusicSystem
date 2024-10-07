import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  PrimaryKey,
} from "sequelize-typescript";
@Table({
  modelName: "User",
  tableName: "users",
  timestamps: true,
})
class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  declare id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare phoneNumber: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare profilePicture: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare role: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare socialMediaLink: string;
}
export default User;
