'use client';

import Headline from '@/components/typography/Headline/Headline';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog/Dialog';
import ActionButton from '../ui/ActionButton/ActionButton';
import Label from '../typography/Label/Label';
import TextField from '../ui/TextField/TextField';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <section className="p-10">
      <div className="flex justify-center">
        <Headline size="m" color="red300">
          주요기능
        </Headline>
        <Dialog>
          <DialogTrigger asChild>
            <ActionButton size="s" variant="filled">
              Share
            </ActionButton>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label>Link</Label>
                <TextField.Single id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
              </div>
              <ActionButton type="submit" size="s" variant="filled" className="px-3">
                <span className="sr-only">Copy</span>
              </ActionButton>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <ActionButton type="button" variant="tonal-red" size="s">
                  Close
                </ActionButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-wrap justify-around">
        {features.map((feature, index) => (
          <div key={index} className="flex-1 p-4">
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
