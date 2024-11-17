import { MysqlConnection } from "../../../config/db.mysql.connection";
import { IUserRepository } from "../contract/user.contract";
import { User } from "../models/user.model";


export class UserMysqlRepository implements IUserRepository{


  async  create(user: User): Promise<User> {
      const con = await MysqlConnection.getconnection();
      const query = `
            INSERT INTO users 
            (tenant_id, username, password_hash, email, role, created_at, updated_at) 
            VALUES (?, ?, ?, ?, ?, NOW(), NOW())
        `;
        
        const values = [
            user.tenant_id,
            user.username,
            user.password_hash,
            user.email,
            user.role
        ];
        
        const [result]: any = await con.execute(query, values);
        const insertId = result.insertId;
        const [rows]: any = await con.execute('SELECT * FROM users WHERE user_id = ?', [insertId]);
        return rows[0] as User;
    }

    update(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(idUser: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
  
}