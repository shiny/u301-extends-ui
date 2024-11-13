# Icon
Use opensource svg icons in your shadcn app.
Inspired by [@nuxt/icon](https://nuxt.com/modules/icon)

## Install

```bash
bunx shadcn add https://ui.tealight.uk/r/icon
```

## Usage

```tsx
import { Icon } from "@/components/ui/icon";

export function IconDemo() {
  return <Icon name="solar:fire-bold-duotone" className="w-6 h-6" />
}
```

Property `name`: the name of the icon you want to use, it is composed of the collection name and the icon name, separated by a colon.
you can find the name in the [icon library](https://icones.js.org/).
