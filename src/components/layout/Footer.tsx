import { Contacts } from '@/components';

export default function Footer() {
  return (
    <footer className="bg-background border-t-border-secondary text-foreground-quaternary border-t py-12">
      <div className="flex w-full flex-col items-center gap-y-2">
        <div className="text-center">
          <div className="text-lg font-semibold">최정원 개발 블로그</div>
          <div className="py-0.5 text-xs">poco a poco cresc.</div>
        </div>

        <div className="text-sm">© 2025. pocresc All rights reserved.</div>

        <Contacts />
      </div>
    </footer>
  );
}
