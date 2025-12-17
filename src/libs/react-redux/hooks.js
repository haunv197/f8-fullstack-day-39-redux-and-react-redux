import { useContext, useEffect, useMemo, useState } from "react";
import Context from "./Context";

function useStore() {
  const store = useContext(Context);
  if (store === undefined) {
    throw Error(
      "Could not find react-redux context value; please ensure the component is wrapped in a Provider"
    );
  }
  return store;
}

function useDispatch() {
  const store = useStore();
  return store.dispatch;
}

function useSelector(selector) {
  const store = useStore();
  const initState = useMemo(() => store.getState(), [store]);

  const initValue = selector(initState);
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    if (initState === store.getState()) {
      console.warn(
        "Selector unknown returned a different result when called with the same parameters. This can lead to unnecessary rerenders"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = store.getState();
      if (initState === newState) return;

      const newValue = selector(newState);
      if (value != newValue) setValue(newValue);
    });
    return unsubscribe;
  }, [value, selector, store, initState]);

  return value;
}

export { useStore, useDispatch, useSelector };
