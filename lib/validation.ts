import { z } from "zod";

/**
 * Audit request payload — validated in app/api/audit/route.ts.
 *
 * `website` is a honeypot field: real users never see or fill it, so any
 * value means the submission is a bot. The API silently discards those.
 */
export const auditRequestSchema = z.object({
  domain: z
    .string()
    .trim()
    .min(3, "Enter your website domain")
    .max(253, "That domain is too long")
    .regex(
      /^(?!-)[a-z0-9-]{1,63}(?<!-)(\.[a-z0-9-]{1,63}(?<!-))+$/i,
      "Enter a valid domain, e.g. yourclinic.com"
    ),
  name: z.string().trim().min(2, "Enter your name").max(80, "That name is too long"),
  email: z.email("Enter a valid work email").max(254, "That email is too long"),
  website: z.string().max(0).optional(),
});

export type AuditRequest = z.infer<typeof auditRequestSchema>;
