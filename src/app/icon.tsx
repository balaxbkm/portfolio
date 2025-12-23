import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    // Read the logo file
    const logoPath = join(process.cwd(), 'public', 'logo-final.png')
    const logoData = readFileSync(logoPath)
    const base64Logo = `data:image/png;base64,${logoData.toString('base64')}`

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                }}
            >
                {/* Render the logo with an invert filter to make it white */}
                <img
                    src={base64Logo}
                    alt="Icon"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
