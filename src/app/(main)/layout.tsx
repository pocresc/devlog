import { Footer, Header, Main, ScrollProgressBar } from '@/components';

export default function MainLayout({ children }: LayoutProps<'/'>) {
  return (
    <div>
      <Header />
      <ScrollProgressBar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
