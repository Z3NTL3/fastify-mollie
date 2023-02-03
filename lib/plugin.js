"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const api_client_1 = require("@mollie/api-client");
const FastifyMolliePlugin = (fastify, opts, done) => {
    fastify.decorate("mollie", (0, api_client_1.createMollieClient)(opts));
    done();
};
exports.default = (0, fastify_plugin_1.default)(FastifyMolliePlugin, { fastify: '^4.x', name: 'fastify-mollie' });
