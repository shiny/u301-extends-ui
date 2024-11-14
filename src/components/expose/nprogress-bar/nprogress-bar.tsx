'use client'

import { AppProgressBar, type ProgressBarProps } from 'next-nprogress-bar'

export function NProgressBar(props: ProgressBarProps) {
    return <AppProgressBar
        height="4px"
        color="hsl(var(--primary))"
        options={{ showSpinner: false }}
        shallowRouting
        {...props}
    />
}
