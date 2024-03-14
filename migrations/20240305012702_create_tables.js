const { decrypt } = require("dotenv");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
      .createTable("charging_station", (table) => {
        table.increments("id").primary();
        table.string("station_name").notNullable();
        table.decimal("lat", [8] , [4]).notNullable();
        table.decimal("lng", [8] , [4]).notNullable();
        table.string("station_address").notNullable();
        table.string("station_status").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      })
      .createTable("Users" , (table) => {
        table.increments("userId").primary();
        table.string("username").notNullable().unique();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("charging_station").dropTable("Users");
  };
