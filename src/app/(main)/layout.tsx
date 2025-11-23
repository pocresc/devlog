import { Header, Main } from '@/components';

export default function MainLayout({ children }: LayoutProps<'/'>) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  );
}
