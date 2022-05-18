import React, {useState, useEffect, useRef, Fragment} from 'react';
import {ImgWrapper, Img, Button, PhotoCardContainer} from '@components/PhotoCard/style';
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'; 


export const PhotoCard = ({id, likes= 0, src = DEFAULT_IMAGE}) => {
    const [show, setShow] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const { isIntersecting } = entries[0];
            if(isIntersecting) {
                setShow(isIntersecting)
                observer.disconnect();
            }
        })
        observer.observe(ref.current)
    },[ref]);

    return (
        <PhotoCardContainer ref={ref}>
            {
                show && (
                    <Fragment>
                        <a href={`/detail/${id}`}>
                            <ImgWrapper>
                                <Img src={src} alt=""/>
                            </ImgWrapper>
                        </a>
                        <Button>
                            <MdFavoriteBorder size="32px" />{likes} likes!
                        </Button>
                    </Fragment>
                )
            }
        </PhotoCardContainer>
    );
};