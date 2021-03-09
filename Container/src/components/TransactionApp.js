import React, { useRef, useEffect } from "react";
import { mount } from "transaction/TransactionApp";
import { useHistory } from "react-router-dom"

export default function TransactionApp({ accountNumber }) {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      accountNumber,
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) history.push(nextPathName);
      },
    });
    history.listen(onContainerNavigate);
  }, [accountNumber]);
  return <div ref={ref}></div>;
}
