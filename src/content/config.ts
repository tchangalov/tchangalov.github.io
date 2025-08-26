import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional()
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing:  z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional()
});

const portfolioSchema = z.object({
    title: z.string(),
    description: z.string(),
    tech: z.string(),
    github: z.string().optional(),
    live: z.string().optional(),
    image: z.string().optional()
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type PortfolioSchema = z.infer<typeof portfolioSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const portfolioCollection = defineCollection({ schema: portfolioSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'portfolio': portfolioCollection
}