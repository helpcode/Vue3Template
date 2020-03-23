import { computed,toRefs, Ref, ref, reactive } from '@vue/composition-api';
import { UnwrapRef } from '@vue/composition-api/dist/reactivity';

/**
 * 注意广播只能在android，Chrome，Edge，Firefox，Opera中使用
 * 不支持IE，Safari 等浏览器，请注意兼容性
 * @constructor
 */
export function HelpingPopupBroadcastChannel() {
  const state: UnwrapRef<{
    HelpingSuccess: BroadcastChannel
  }> = {
    HelpingSuccess: new BroadcastChannel('HelpingSuccess')
  };

  return {
    ...toRefs(state)
  }
}