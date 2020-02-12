import { computed } from '@vue/composition-api';
import { getRuntimeVM } from '../utils/runtime';

export function useRouter() {
  const vm = getRuntimeVM();
  const route = computed(() => vm.$route);
  return { route, router: vm.$router };
}
