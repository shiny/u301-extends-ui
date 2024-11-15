
import { readFile } from 'node:fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc'
import { cache } from 'react'
import rehypePrettyCode from "rehype-pretty-code"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const { frontmatter } = await getData(slug)
    return {
        title: frontmatter.title,
        description: frontmatter?.description ?? '',
    }
}

const getData = cache(async function(slug: string) {
    const text = await readFile(`./src/components/expose/${slug}/readme.md`)
    // https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support
    const { content, frontmatter } = await compileMDX<{ title: string; description?: string }>({
        source: text.toString(),
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, {
                    transformers: [],
                }]],
            },
        },
    })
    return { content, frontmatter }
})

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const { content } = await getData(slug)
    return <div>
        <section className='m-8'>
            <article className="mx-auto prose prose-stone">
                {/* <Document /> */}
                {content}
            </article>
        </section>
    </div>
}