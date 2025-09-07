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
    <label {...props} htmlFor="dad" className={cn('m-12 p-10', className)}>
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
