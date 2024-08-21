/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/Endquiz` | `/_sitemap` | `/cheese` | `/logic` | `/mainscreen` | `/quizscreen`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
