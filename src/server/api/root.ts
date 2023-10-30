import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { EnquiryRouter } from "./routers/enquiry.route";
import { SettingRouter } from "./routers/setting.route";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  enquiry: EnquiryRouter,
  setting: SettingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
