import { computed } from '@vue/composition-api';
import { getRuntimeVM } from '../utils/runtime.utils';

export function useRouter() {
  const vm = getRuntimeVM();
  const route = computed(() => vm.$route);
  return { route, router: vm.$router };
}
