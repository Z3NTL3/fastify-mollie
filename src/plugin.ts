import fp from "fastify-plugin";
import { FastifyInstance } from 'fastify'
import { createMollieClient, MollieOptions, MollieClient } from '@mollie/api-client'

const FastifyMolliePlugin = 
(
    fastify:FastifyInstance , 
    opts: MollieOptions, 
    done: any
) => {
    fastify.decorate("mollie", createMollieClient(opts))
    done()
}
export default fp(FastifyMolliePlugin, {fastify: '^4.x',name: 'fastify-mollie'})
declare module 'fastify' {
    export interface FastifyInstance {
        mollie: MollieClient
    }  
}