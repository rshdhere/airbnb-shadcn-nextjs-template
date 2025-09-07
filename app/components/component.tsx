import React from 'react';
import cn from '@/lib/utils';

const New = ({
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
        'm-12 rounded border-2 border-blue-500 bg-blue-50 p-10 text-blue-900',
        className,
      )}
    >
      {children}
    </label>
  );
};

export default function Component() {
  return (
    <div>
      <New>hii there</New>
    </div>
  );
}
