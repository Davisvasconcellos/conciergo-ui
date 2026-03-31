import { readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'assets', 'img', 'favicon.ico')
  const data = await readFile(filePath)

  return new Response(data, {
    headers: {
      'content-type': 'image/x-icon',
      'cache-control': 'public, max-age=31536000, immutable',
    },
  })
}
