/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
  namespace NodeJS {
      interface Global {
          prisma: any;
      }
  }
}

export { };