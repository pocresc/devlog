import { Header } from '@/components';

export default function MainLayout({ children }: LayoutProps<'/'>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
