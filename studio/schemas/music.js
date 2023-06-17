// schemas/pet.js
export default {
    name: 'music',
    type: 'document',
    title: 'Music',
    fields: [
        {
            name: 'title',
            title: 'Title',
            required: true,
            description: 'Remember that long titles can be truncated in podcast apps',
            type: 'string'
        },
        {
            name: 'file',
            title: 'Website songs',
            description:
                'Most songs support .mp3, but other audio-formats may work as well',
            type: 'file',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'fileUrl',
            title: 'Internal location for music media file',
            description: 'For when you host your music media file elsewhere',
            type: 'url'
        },
    ]
}