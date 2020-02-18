import Vue, {VNode} from 'vue';
import {ComponentInstance} from "@vue/composition-api/dist/component/component";

declare module '@vue/composition-api/dist/component/component' {
    interface SetupContext {
        readonly attrs: Record<string, string>;
        readonly slots: {
            [key: string]: (...args: any[]) => VNode[];
        };
        readonly parent: ComponentInstance | null;
        readonly root: ComponentInstance;
        readonly listeners: {
            [key: string]: Function;
        };
        emit(event: string, ...args: any[]): void;
    }
}