import * as React from "react";
import { cn } from "../lib/utils";

const TabsContext = React.createContext(null);

const Tabs = React.forwardRef(({ className, defaultValue, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div ref={ref} className={cn("w-full", className)} {...props} />
    </TabsContext.Provider>
  );
});
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-gray-100 p-1 mb-4",
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(({ className, value, ...props }, ref) => {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        context.value === value
          ? "bg-white text-gray-900 shadow-sm"
          : "text-gray-600 hover:text-gray-900",
        className
      )}
      onClick={() => context.setValue(value)}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, value, ...props }, ref) => {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }

  if (context.value !== value) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
