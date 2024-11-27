---
title: Analytics OpenPanel
---
# Analytics OpenPanel

It's a wrapper component for `@openpanel/nextjs`. For it's usage, please refer to the documentation
https://openpanel.dev/docs/sdks/nextjs

> Don't forget to set OpenPanel attributes to enable tracking.

## Install
```bash
bunx shadcn add https://ui.tealight.uk/r/analytics-openpanel
```

## Usage

Set `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` in `.env` file, and import `AnalyticsGoogle` component in your layout component.

```tsx {1,7}
import { AnalyticsOpenPanel } from "@/components/ui/analytics-openpanel"

fucntion Layout({ children }) {
    return <html>
        <body>
            {children}
            <AnalyticsOpenPanel trackScreenViews={true} clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!} />
        </body>
    </html>
}
```
