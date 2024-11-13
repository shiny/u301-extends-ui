import { cn } from "@/lib/utils"
import { Icon as IconComponent } from '@iconify/react';

type IconComponentProps = Omit<React.ComponentProps<typeof IconComponent>, 'icon'>;
interface IconProps extends IconComponentProps {
  name: string;
  className?: string;
}

export default function Icon(props: IconProps) {
  return <span className={cn('inline-block w-4 h-4 align-text-top', props.className)}>
    <IconComponent
      icon={props.name}
      className='w-full h-full'
    />
  </span>
}