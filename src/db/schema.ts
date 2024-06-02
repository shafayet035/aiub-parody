import { relations } from 'drizzle-orm';
import {
  pgEnum,
  pgTable,
  serial,
  text,
  varchar,
  integer,
} from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', [
  'student',
  'faculty-member',
  'superadmin',
  'admin',
]);

export const User = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: varchar('name').notNull(),
  email: text('email').notNull(),
  role: roleEnum('role').notNull().default('student'),
  departmentId: integer('department_id').references(() => Department.id),
});

export const Department = pgTable('departments', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  description: text('description').notNull(),
});

export const DepartmentRelations = relations(Department, ({ one }) => ({
  user: one(User),
}));
