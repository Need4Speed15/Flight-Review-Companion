import { sqliteTable, text, integer, primaryKey, index } from 'drizzle-orm/sqlite-core';

export const studyRecords = sqliteTable('study_records', {
  userId: text('user_id').notNull(),
  recordKey: text('record_key').notNull(),
  valueJson: text('value_json').notNull(),
  updatedAt: integer('updated_at').notNull(),
  opId: text('op_id').notNull(),
}, table => [primaryKey({columns: [table.userId, table.recordKey]})]);

export const correctionReports = sqliteTable('correction_reports', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  cardId: text('card_id').notNull(),
  concern: text('concern').notNull(),
  createdAt: integer('created_at').notNull(),
  status: text('status').notNull().default('open'),
}, table => [index('reports_created_at').on(table.createdAt), index('reports_user_created').on(table.userId, table.createdAt)]);
