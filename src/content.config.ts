import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    abstract: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

const vulnerabilityClasses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vulnerability-classes' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    severity: z.enum(['critical', 'high', 'medium', 'low']),
    tier: z.enum(['novel', 'under-cataloged']),
    dstDetectable: z.boolean(),
    cweMapping: z.string().optional(),
    papers: z.array(z.string()).default([]),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['graduated', 'incomplete']),
    cycle: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().default(''),
    tags: z.array(z.string()).default([]),
  }),
});

const tracker = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tracker' }),
  schema: z.object({
    title: z.string(),
    domain: z.enum(['ai', 'code']),
    category: z.enum(['owasp-top10', 'known-vuln', 'supply-chain', 'novel-attack', 'framework-advisory', 'patch-needed', 'research-needed']),
    severity: z.enum(['critical', 'high', 'medium', 'low', 'info']),
    status: z.enum(['open', 'in-progress', 'resolved', 'wont-fix']).default('open'),
    zeroDay: z.boolean().default(false),
    dstActionable: z.boolean().default(false),
    dstShellTest: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    cve: z.string().optional(),
    source: z.string().optional(),
    affects: z.string().optional(),
  }),
});

export const collections = { research, 'vulnerability-classes': vulnerabilityClasses, insights, blog, tracker };
