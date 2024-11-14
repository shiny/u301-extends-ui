# Analytics Umami

It's a wrapper component for `next-umami`. For it's usage, please refer to the documentation
https://github.com/gixnluca/next-umami

## Install
```bash
bunx shadcn add https://ui.tealight.uk/r/analytics-umami
```

## Usage

Set `NEXT_PUBLIC_UMAMI_WEBSITE_ID` in `.env` file, and import `AnalyticsUmami` component in your layout component.

```tsx
import { AnalyticsUmami } from "@/components/ui/analytics-umami"

fucntion Layout({ children }) {
    return <html>
        <body>
            {children}
            <AnalyticsUmami clientId={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID!} />
        </body>
    </html>
}
```