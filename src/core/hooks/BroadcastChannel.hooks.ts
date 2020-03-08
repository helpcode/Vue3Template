import { computed,toRefs, Ref, ref, reactive } from '@vue/composition-api';
import { UnwrapRef } from '@vue/composition-api/dist/reactivity';

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