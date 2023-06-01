/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as Langfuse from "../../../../api";
import * as core from "../../../../core";
export declare const LlmAttributes: core.serialization.ObjectSchema<serializers.LlmAttributes.Raw, Langfuse.LlmAttributes>;
export declare namespace LlmAttributes {
    interface Raw {
        model?: unknown;
        prompt?: string | null;
        completion?: string | null;
        tokens?: serializers.LlmTokens.Raw | null;
    }
}