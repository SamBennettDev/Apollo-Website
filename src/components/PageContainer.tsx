import { navbarHeight } from "@/utils/sizes";

type PageContainerProps = {
  children: React.ReactNode;
  className: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={className}
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      {children}
    </div>
  );
}
