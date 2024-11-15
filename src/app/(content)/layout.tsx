export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <div>
            <section className='m-8'>
                <article className="mx-auto prose prose-stone">
                    {/* <Document /> */}
                    {children}
                </article>
            </section>
        </div>
    )
  }