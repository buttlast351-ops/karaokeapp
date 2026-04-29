import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AddQueueRequest, HealthStatus, OkResponse, QueueItem, QueueStats, SearchKaraokeParams, SearchResult } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search YouTube for karaoke videos
 */
export declare const getSearchKaraokeUrl: (params: SearchKaraokeParams) => string;
export declare const searchKaraoke: (params: SearchKaraokeParams, options?: RequestInit) => Promise<SearchResult[]>;
export declare const getSearchKaraokeQueryKey: (params?: SearchKaraokeParams) => readonly ["/api/search", ...SearchKaraokeParams[]];
export declare const getSearchKaraokeQueryOptions: <TData = Awaited<ReturnType<typeof searchKaraoke>>, TError = ErrorType<unknown>>(params: SearchKaraokeParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchKaraoke>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof searchKaraoke>>, TError, TData> & {
    queryKey: QueryKey;
};
export type SearchKaraokeQueryResult = NonNullable<Awaited<ReturnType<typeof searchKaraoke>>>;
export type SearchKaraokeQueryError = ErrorType<unknown>;
/**
 * @summary Search YouTube for karaoke videos
 */
export declare function useSearchKaraoke<TData = Awaited<ReturnType<typeof searchKaraoke>>, TError = ErrorType<unknown>>(params: SearchKaraokeParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchKaraoke>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get the current karaoke queue
 */
export declare const getGetQueueUrl: () => string;
export declare const getQueue: (options?: RequestInit) => Promise<QueueItem[]>;
export declare const getGetQueueQueryKey: () => readonly ["/api/queue"];
export declare const getGetQueueQueryOptions: <TData = Awaited<ReturnType<typeof getQueue>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getQueue>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getQueue>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetQueueQueryResult = NonNullable<Awaited<ReturnType<typeof getQueue>>>;
export type GetQueueQueryError = ErrorType<unknown>;
/**
 * @summary Get the current karaoke queue
 */
export declare function useGetQueue<TData = Awaited<ReturnType<typeof getQueue>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getQueue>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Add a song to the queue
 */
export declare const getAddToQueueUrl: () => string;
export declare const addToQueue: (addQueueRequest: AddQueueRequest, options?: RequestInit) => Promise<QueueItem>;
export declare const getAddToQueueMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addToQueue>>, TError, {
        data: BodyType<AddQueueRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof addToQueue>>, TError, {
    data: BodyType<AddQueueRequest>;
}, TContext>;
export type AddToQueueMutationResult = NonNullable<Awaited<ReturnType<typeof addToQueue>>>;
export type AddToQueueMutationBody = BodyType<AddQueueRequest>;
export type AddToQueueMutationError = ErrorType<unknown>;
/**
 * @summary Add a song to the queue
 */
export declare const useAddToQueue: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addToQueue>>, TError, {
        data: BodyType<AddQueueRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof addToQueue>>, TError, {
    data: BodyType<AddQueueRequest>;
}, TContext>;
/**
 * @summary Remove a song from the queue
 */
export declare const getRemoveFromQueueUrl: (id: string) => string;
export declare const removeFromQueue: (id: string, options?: RequestInit) => Promise<OkResponse>;
export declare const getRemoveFromQueueMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeFromQueue>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof removeFromQueue>>, TError, {
    id: string;
}, TContext>;
export type RemoveFromQueueMutationResult = NonNullable<Awaited<ReturnType<typeof removeFromQueue>>>;
export type RemoveFromQueueMutationError = ErrorType<unknown>;
/**
 * @summary Remove a song from the queue
 */
export declare const useRemoveFromQueue: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeFromQueue>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof removeFromQueue>>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Mark a song as played (advance the queue)
 */
export declare const getMarkPlayedUrl: (id: string) => string;
export declare const markPlayed: (id: string, options?: RequestInit) => Promise<OkResponse>;
export declare const getMarkPlayedMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markPlayed>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markPlayed>>, TError, {
    id: string;
}, TContext>;
export type MarkPlayedMutationResult = NonNullable<Awaited<ReturnType<typeof markPlayed>>>;
export type MarkPlayedMutationError = ErrorType<unknown>;
/**
 * @summary Mark a song as played (advance the queue)
 */
export declare const useMarkPlayed: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markPlayed>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markPlayed>>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Queue stats summary
 */
export declare const getGetStatsUrl: () => string;
export declare const getStats: (options?: RequestInit) => Promise<QueueStats>;
export declare const getGetStatsQueryKey: () => readonly ["/api/stats"];
export declare const getGetStatsQueryOptions: <TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getStats>>>;
export type GetStatsQueryError = ErrorType<unknown>;
/**
 * @summary Queue stats summary
 */
export declare function useGetStats<TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map