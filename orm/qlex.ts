import { Pool, QueryResult } from "pg";
import dotenv from "dotenv";

dotenv.config();

interface Model {
    tableName: string;
    columns: string[];
}

/**
 * TODO : Caching method which is reset after an insert, update or delete
 */

class Qlex {
    private pool: Pool;

    constructor() {
        this.pool = new Pool();
    }

    async findBy(tableName: string, column: string, value: any) {
        // Test the validity of the value
        const query = `SELECT * FROM ${tableName} WHERE ${column} = $1;`;
        return await this.pool.query(query, [value]);
    }
}

export default Qlex;