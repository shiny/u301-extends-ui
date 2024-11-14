---
title: NProgress Bar
---
# NProgress Bar

This is a wrapper component for next-nprogress-bar. Go for more details: https://next-nprogress-bar.vercel.app/


## Install
```bash
bunx shadcn add https://ui.tealight.uk/r/nprogress-bar
```

## Usage

Add the `NProgressBar` component to your layout component `/app/layout.tsx`.

```tsx
import { NProgressBar } from "@/components/ui/nprogress-bar"

fucntion Layout({ children }) {
    return <html>
        <body>
            {children}
            <NProgressBar />
        </body>
    </html>
}
```

- default color is shadcn `--primary` css var
- default height is 4px

You can customize the color and height by passing props to the `NProgressBar` component.

```tsx
<NProgressBar color="hsl(var(--border))" height="6px" />
```

Use rgb color
```tsx
<NProgressBar color="#000000" />
```
