import { notFound } from "next/navigation";
import fs from "node:fs/promises"

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
        return notFound()
    }

    const componentDir = "src/components/expose/"+slug
    const matchedFiles = await fs.readdir(componentDir);
    const registryJSONString = await fs.readFile(componentDir+"/registry.json", "utf8")
    const registryJSON = JSON.parse(registryJSONString)

    const filterTsx = (file: string) => file.endsWith(".tsx")

    const files = await Promise.all(matchedFiles.filter(filterTsx).map(async file => ({
        path: "ui/" + file,
        content: await fs.readFile(componentDir+"/"+file, "utf8"),
        type: "registry:ui",
        target: ""
    })))
    const result = {
        ...registryJSON,
        files
    }
    return Response.json(result)
}