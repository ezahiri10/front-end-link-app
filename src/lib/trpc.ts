import { createTRPCReact } from '@trpc/react-query';
import type { inferRouterOutputs } from '@trpc/server';

// Type stub for deployment without server types
type AppRouter = {
  auth: any;
  user: any;
  links: any;
};

export type RouterOutput = inferRouterOutputs<AppRouter>;

export const trpc = createTRPCReact<AppRouter>();
