import { onMounted, ref, createApp } from 'vue';

export const AsyncComponentShow = (compontent: any, data?: any) => {
  return new Promise((resolve) => {
    let dom: HTMLElement | null = document.createElement('div');
    document.body.appendChild(dom);
    const vm: any = createApp(compontent, data);
    const intance = vm.mount(dom);
    intance?.onClosed &&
      intance?.onClosed(() => {
        vm.unmount();
        intance?.$destroy && intance.$destroy();
        vm?.$destroy && vm.$destroy();
        dom && dom.remove();
        dom = null;
        resolve(undefined);
      });
    intance?.onSubmit &&
      intance?.onSubmit((arg: any) => {
        intance.show = false;
        resolve(arg);
      });
  });
};

type Fn = (...args: any) => void;

export const AsyncComponentSetup = () => {
  const show = ref(false);
  let closedFn: Fn = () => {
    return;
  };
  let callback: Fn = () => {
    return;
  };
  const onClosed = (fn: Fn) => {
    closedFn = fn;
  };
  const onSubmit = (fn: Fn) => {
    callback = fn;
  };
  onMounted(() => {
    show.value = true;
  });
  return {
    show,
    closedFn: () => {
      closedFn();
    },
    callback: (arg: any) => {
      callback(arg);
    },
    onClosed,
    onSubmit,
  };
};
