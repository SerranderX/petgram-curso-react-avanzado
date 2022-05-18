import React, {useState, useEffect, useRef, Fragment} from 'react';
import {ImgWrapper, Img, Button, PhotoCardContainer} from '@components/PhotoCard/style';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'; 


export const PhotoCard = ({id, likes= 0, src = DEFAULT_IMAGE}) => {
    const ref = useRef();
    const [show, setShow] = useState(false);
    const [liked, setLiked] = useState(() => {
        const like = localStorage.getItem(`like-${id}`);
        return like === 'true';
    });

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
        ).then(() => {
            const observer = new IntersectionObserver(entries => {
                const { isIntersecting } = entries[0];
                if(isIntersecting) {
                    setShow(isIntersecting)
                    observer.disconnect();
                }
            })
            observer.observe(ref.current)
        })
    },[ref]);

    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(`like-${id}`, JSON.stringify(value));
            setLiked(value)
        } catch (e) {
            console.error(e);
        }
    }

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
                        <Button onClick={() => setLocalStorage(!liked)}>
                            <Icon size="32px" />
                            {likes} likes!
                        </Button>
                    </Fragment>
                )
            }
        </PhotoCardContainer>
    );
};