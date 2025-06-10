import { useTransition } from "react";

const Tabs = ({ action, children, isActive }) => {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>;
  }
  return (
    <button
      onClick={() => {
        startTransition(() => {
          action();
        });
      }}
    >
      {children}
    </button>
  );
};

export default Tabs;
