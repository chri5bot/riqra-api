import dotenv from "dotenv";

dotenv.config();

export const API_PORT = process.env.API_PORT || 3000;
export const DB_USERNAME = process.env.DB_USERNAME || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_DATABASE = process.env.DB_DATABASE || "";
export const DB_HOST = process.env.DB_HOST || "";
export const DB_PORT = process.env.DB_PORT || "";
export const DB_DIALECT = process.env.DB_DIALECT || "";
