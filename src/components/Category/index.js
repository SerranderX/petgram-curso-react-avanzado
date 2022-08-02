import React from 'react'
import {Anchor, Image} from '@components/Category/style'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '😣' }) => (
    <Anchor to={path}>
        <Image src={cover}  />
        {emoji}
    </Anchor>
)

