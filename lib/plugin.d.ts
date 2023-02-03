import { MollieOptions, MollieClient } from '@mollie/api-client';
declare const _default: import("fastify").FastifyPluginCallback<MollieOptions, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault, import("fastify").FastifyBaseLogger>;
export default _default;
declare module 'fastify' {
    interface FastifyInstance {
        mollie: MollieClient;
    }
}
