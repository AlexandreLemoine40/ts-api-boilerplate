import { Pool, QueryResult } from "pg";

interface Model {
    tableName: string;
    columns: string[];
}

class Qlex {
    private pool: Pool;

    constructor() {
        this.pool = new Pool();
    }

    async create(model: Model, data: any): Promise<QueryResult> {
        const { tableName, columns } = model;
        const values = columns.map((column) => data[column]);
        // Test if there are enough values for the columns;
        const query = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES (${columns.map((_, i) => `$${i + 1}`).join(", ")})`;
        return this.pool.query(query, values);
    }

    async read(model: Model, conditions: any = {}): Promise<QueryResult> {
        const { tableName, columns } = model;
        const whereClause = Object.keys(conditions).map((column, i) => `${column} = $${i + 1}`);
        const values = Object.values(conditions);

        const query = `SELECT ${columns.join(", ")} FROM ${tableName} WHERE ${whereClause.join(" AND ")}`;
        return this.pool.query(query, values);
    }

    async update(model: Model, conditions: any, data: any): Promise<QueryResult> {
        const { tableName, columns } = model;
        const setClause = Object.keys(data).map((column, i) => `${column} = $${i + 1 + Object.keys(conditions).length}`);
        const whereClause = Object.keys(conditions).map((column, i) => `${column} = $${i + 1}`);
        const values = [...Object.values(conditions), ...Object.values(data)];

        const query = `UPDATE ${tableName} SET ${setClause.join(", ")} WHERE ${whereClause.join(" AND ")}`;
        return this.pool.query(query, values);
    }

    async delete(model: Model, conditions: any): Promise<QueryResult> {
        const { tableName } = model;
        const whereClause = Object.keys(conditions).map((column, i) => `${column} = $${i + 1}`);
        const values = Object.values(conditions);

        const query = `DELETE FROM ${tableName} WHERE ${whereClause.join(" AND ")}`;
        return this.pool.query(query, values);
    }
}

export default Qlex;