import React from 'react';
import cn from '@/lib/utils';

const ComponentX = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      htmlFor="something"
      className={cn(
        'm-4 rounded border border-gray-300 bg-white p-6 text-gray-800 shadow-sm',
        className,
      )}
    >
      {children}
    </label>
  );
};

const ComponentY = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      htmlFor="something"
      className={cn(
        'm-4 rounded border border-gray-300 bg-white p-6 text-gray-800 shadow-sm',
        className,
      )}
    >
      {children}
    </label>
  );
};

const ComponentZ = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      htmlFor="something"
      className={cn(
        'm-4 rounded border border-gray-300 bg-white p-6 text-gray-800 shadow-sm',
        className,
      )}
    >
      {children}
    </label>
  );
};

export default function Component() {
  return (
    <div className="space-y-4">
      <ComponentX>First component</ComponentX>
      <ComponentY>Second componet</ComponentY>
      <ComponentZ>Third componet</ComponentZ>
    </div>
  );
}
