import { Star } from 'lucide-react';

import { Button } from '@/assets/components/ui/button';

const AppFloatButton = () => {
  return (
    <Button
      className="z-50  group/float-btn fixed right-4 bottom-4 size-12 cursor-pointer transition-colors border-gray-950 bg-gray-700 text-amber-300 hover:bg-gray-950"
      variant="outline"
    >
      <Star className="size-6 transition-[fill] fill-transparent group-hover/float-btn:fill-amber-300 group-hover/float-btn:text-amber-300" />
    </Button>
  );
};

export default AppFloatButton;
