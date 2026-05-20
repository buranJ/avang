import { useEffect, useState } from "react";

export function useAsyncData(loader, deps = []) {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    queueMicrotask(() => {
      if (active && !controller.signal.aborted) {
        setState((current) => ({
          data: current.data,
          error: null,
          loading: true,
        }));
      }
    });

    loader(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setState({ data, error: null, loading: false });
        }
      })
      .catch((error) => {
        if (!controller.signal.aborted) {
          setState({ data: null, error, loading: false });
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
    // Loader dependencies are supplied by callers through the deps argument.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
