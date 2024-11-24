---
title: Analytics Google
---
# Analytics Google

It's a wrapper component for `@next/third-parties/google`. For it's usage, please refer to the documentation
https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics

## Install
```bash
bunx shadcn add https://ui.tealight.uk/r/analytics-google
```

## Usage

Set `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` in `.env` file, and import `AnalyticsGoogle` component in your layout component.

```tsx {1,7}
import { AnalyticsGoogle } from "@/components/ui/analytics-google"

fucntion Layout({ children }) {
    return <html>
        <body>
            {children}
            <AnalyticsGoogle gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
        </body>
    </html>
}
```