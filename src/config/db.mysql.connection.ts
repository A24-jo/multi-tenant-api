
import {Connection, createConnection} from "mysql2/promise";


export class MysqlConnection{
    private static instance:MysqlConnection | null = null;  
    private connetion!:Connection;

    private  constructor(){};

 private async connect(){
     this.connetion = await createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test',
      });
  }

  public static async getInstance():Promise<MysqlConnection>{
   if(!this.instance){
    this.instance = new MysqlConnection();
    await this.instance.connect();
   }
   return this.instance;
  }

  public static async getconnection():Promise<Connection>{
    return (await MysqlConnection.getInstance()).connetion;
  }

}


      
