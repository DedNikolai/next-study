'use client'

export default function BlogErrorPage({error}: {error: Error}) {
    return (
        <h1>Oooops!!!! {error.message}</h1>
    )
}