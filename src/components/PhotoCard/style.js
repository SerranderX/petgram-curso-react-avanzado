import styled from 'styled-components'
import { fadeIn } from '@styles/animation'

const PhotoCardContainer = styled.article`
    margin: 10px 0;
    min-height: 200px;
`

const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

const Img = styled.img`
    ${fadeIn()}
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export {ImgWrapper, Img, PhotoCardContainer}