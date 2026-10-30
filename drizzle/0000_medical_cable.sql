CREATE TABLE `correction_reports` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`card_id` text NOT NULL,
	`concern` text NOT NULL,
	`created_at` integer NOT NULL,
	`status` text DEFAULT 'open' NOT NULL
);
--> statement-breakpoint
CREATE INDEX `reports_created_at` ON `correction_reports` (`created_at`);--> statement-breakpoint
CREATE INDEX `reports_user_created` ON `correction_reports` (`user_id`,`created_at`);--> statement-breakpoint
CREATE TABLE `study_records` (
	`user_id` text NOT NULL,
	`record_key` text NOT NULL,
	`value_json` text NOT NULL,
	`updated_at` integer NOT NULL,
	`op_id` text NOT NULL,
	PRIMARY KEY(`user_id`, `record_key`)
);
